import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import './index.css';

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]); // smooth parallax movement

  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = Array(60).fill().map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100,180,255,0.15)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-[#07080A] text-white">
      {/* Background effects */}
      <canvas id="particleCanvas" className="absolute inset-0 z-0"></canvas>

      {/* Subtle animated background gradient */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-indigo-600/25 to-cyan-400/25 blur-[200px] rounded-full z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#4FC3F7] bg-clip-text text-transparent drop-shadow-[0_0_15px_#4FC3F7]"
        >
          The AI Watchdog for Supply Chain Integrity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 text-lg max-w-3xl mt-6 leading-relaxed"
        >
          Monitor vendor behavior, detect hidden cost drifts, and safeguard your purchasing margins — all before it impacts your ERP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-5"
        >
          <a
            href="https://app.sproxx.io"
            className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] rounded-lg text-white font-semibold shadow-lg hover:shadow-[#4FC3F7]/40 transition-all hover:-translate-y-1"
          >
            Launch Platform
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-[#4FC3F7] text-[#4FC3F7] rounded-lg font-semibold hover:bg-[#4FC3F7]/10 transition-all hover:-translate-y-1"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-40 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Powering Next-Gen Procurement Teams
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Procurement Intelligence",
              desc: "Instantly detect price variances, analyze vendor confirmations, and automate response triggers.",
              icon: "📊",
            },
            {
              title: "Vendor Reliability",
              desc: "Track fulfillment accuracy, lead times, and delivery anomalies across multiple suppliers.",
              icon: "🚚",
            },
            {
              title: "Margin Shield",
              desc: "Forecast pricing trends and detect margin drifts using adaptive AI models.",
              icon: "🧠",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-[#0C0E13] border border-[#1A1C24] rounded-3xl p-10 shadow-lg hover:shadow-[#4FC3F7]/30 transition-all hover:-translate-y-2 backdrop-blur-md"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold text-[#4FC3F7] mb-3">{f.title}</h3>
              <p className="text-gray-400 text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-10 text-gray-500 text-sm text-center">
        <p>© 2025 Sproxx Inc. | Engineered for precision and visibility.</p>
      </footer>
    </div>
  );
}