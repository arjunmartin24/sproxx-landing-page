import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { createServer } from 'http';
import { readFileSync, writeFileSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');

// Maximum timeout for prerendering (30 seconds)
const MAX_TIMEOUT = 30000;

// Simple static file server for prerendering
function createStaticServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      // Strip query/hash and decode the URL path
      const rawUrl = req.url || '/';
      const urlPath = rawUrl.split('?')[0].split('#')[0];
      let safePathname = '/';
      try {
        safePathname = decodeURIComponent(urlPath);
      } catch {
        safePathname = '/';
      }

      // Default to index.html
      const relativePath = safePathname === '/' ? 'index.html' : safePathname.replace(/^\//, '');

      // Resolve and normalize to prevent path traversal
      const resolvedPath = join(distPath, relativePath);
      
      // Security: ensure file is within distPath
      if (!resolvedPath.startsWith(distPath)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      try {
        const stats = statSync(resolvedPath);
        if (stats.isFile()) {
          const content = readFileSync(resolvedPath);
          const ext = extname(resolvedPath);
          const contentType = {
            '.html': 'text/html',
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.map': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.webp': 'image/webp',
            '.ico': 'image/x-icon',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
          }[ext] || 'text/plain';

          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        } else {
          res.writeHead(404);
          res.end('Not Found');
        }
      } catch (error) {
        res.writeHead(404);
        res.end('Not Found');
      }
    });

    server.listen(port, () => {
      resolve(server);
    });
  });
}

async function prerender() {
  let browser = null;
  let server = null;

  try {
    console.log('Starting prerendering...');
    
    // Configure Chromium for Vercel/serverless environment
    const isVercel = process.env.VERCEL === '1' || process.env.AWS_LAMBDA_FUNCTION_NAME;
    
    if (isVercel) {
      // Use Vercel-optimized Chromium
      chromium.setGraphicsMode(false);
    }

    const PORT = Number(process.env.PRERENDER_PORT) || 0; // 0 = pick an open port
    server = await createStaticServer(PORT);
    const address = server.address();
    const actualPort = typeof address === 'object' && address ? address.port : 3000;
    const url = `http://localhost:${actualPort}/`;
    console.log(`Prerendering URL: ${url}`);
    
    // Launch browser with Vercel-safe configuration
    let executablePath;
    let browserArgs;
    
    if (isVercel) {
      // Vercel/serverless environment
      chromium.setGraphicsMode(false);
      executablePath = await chromium.executablePath();
      browserArgs = [
        ...chromium.args,
        '--hide-scrollbars',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
      ];
    } else {
      // Local development - use system Chrome if available
      // If not available, the error will be caught and build will continue
      const { accessSync, constants } = await import('fs');
      const overridePath = process.env.PRERENDER_CHROME_PATH;
      const possiblePaths = [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // macOS
        '/usr/bin/google-chrome', // Linux
        '/usr/bin/chromium-browser', // Linux
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Windows
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // Windows
      ];
      if (overridePath) {
        possiblePaths.unshift(overridePath);
      }
      
      for (const path of possiblePaths) {
        try {
          accessSync(path, constants.F_OK);
          executablePath = path;
          break;
        } catch {
          // Continue to next path
        }
      }
      
      if (!executablePath) {
        throw new Error('No local Chrome/Chromium executable found for prerendering. Set PRERENDER_CHROME_PATH to override.');
      }
      
      browserArgs = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu',
      ];
    }

    browser = await puppeteer.launch({
      args: browserArgs,
      defaultViewport: chromium.defaultViewport,
      executablePath: executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    
    // Set timeout for the entire prerender process
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Prerender timeout exceeded')), MAX_TIMEOUT);
    });

    const prerenderPromise = (async () => {
      // Navigate to the local server
      await page.goto(url, { 
        waitUntil: 'networkidle2', 
        timeout: 20000 
      });
      
      // Wait for React to render content with actual children
      await page.waitForFunction(() => {
        const root = document.querySelector('#root');
        return !!(root && root.children && root.children.length > 0);
      }, { timeout: 15000 });

      // Wait for app render markers (hero or sections) - fallback for reliability
      console.log('Waiting for app render markers (hero or sections)...');
      await page.waitForFunction(
        () => {
          return (
            document.querySelector('[data-testid="hero-title"]') ||
            document.querySelector('#services') ||
            document.querySelector('#pricing') ||
            document.querySelector('#faq')
          );
        },
        { timeout: 20000 }
      );

      // Short stabilized delay for fonts/animations to settle
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Scroll to load all content (lazy loading, animations, etc.)
      await page.evaluate(() => {
        return new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const maxScrolls = 50; // Prevent infinite loops
          let scrollCount = 0;
          
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            scrollCount++;

            if (totalHeight >= scrollHeight || scrollCount >= maxScrolls) {
              clearInterval(timer);
              // Scroll back to top
              window.scrollTo(0, 0);
              resolve();
            }
          }, 100);
        });
      });
      
      // Wait a bit more for animations/async content to finish
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get the prerendered HTML
      const prerenderedHTML = await page.content();
      
      // Write back to index.html
      writeFileSync(indexPath, prerenderedHTML, 'utf-8');
      
      console.log('✅ Prerendering complete!');
      console.log('✅ HTML now contains prerendered content');
    })();

    // Race between prerender and timeout
    await Promise.race([prerenderPromise, timeoutPromise]);

  } catch (error) {
    // Fail-safe: log warning but don't fail the build
    console.warn('⚠️  Prerendering failed:', error.message);
    console.warn('⚠️  Build will continue without prerendered HTML');
    console.warn('⚠️  The site will still work, but SEO may be affected');
    
    // Ensure build does not fail, but still allow cleanup in finally
    process.exitCode = 0;
    return;
  } finally {
    // Cleanup
    try {
      if (browser) {
        await browser.close();
      }
    } catch (error) {
      console.warn('Warning: Error closing browser:', error.message);
    }
    
    try {
      if (server) {
        server.close();
      }
    } catch (error) {
      console.warn('Warning: Error closing server:', error.message);
    }
  }
}

// Run prerender with top-level error handling
prerender().catch((error) => {
  console.warn('⚠️  Fatal prerender error:', error.message);
  // Ensure build does not fail
  process.exitCode = 0;
});
