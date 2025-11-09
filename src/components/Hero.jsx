import { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";

export default function Hero({ isDark = true, scrollProgress }) {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );

  useEffect(() => {
    const updateViewport = () => {
      setViewportWidth(window.innerWidth);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const contentOpacity = useTransform(scrollProgress, [0, 0.3], [1, 0.2]);
  const contentY = useTransform(scrollProgress, [0, 0.3], [0, -20]);
  const buttonScale = useTransform(scrollProgress, [0, 0.3], [1, 0.95]);

  const isMobile = viewportWidth < 768;
  const sectionPaddingTop = isMobile ? "32vh" : "36vh";

  return (
    <section
      id="hero-section"
      className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6"
      style={{ minHeight: "100vh", paddingTop: sectionPaddingTop }}
    >
      <motion.h1
        style={{
          opacity: contentOpacity,
          y: contentY,
          willChange: "transform, opacity",
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3,
        }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-[0_0_15px_#4FC3F7]"
      >
        The AI Watchdog for Supply Chain Integrity
      </motion.h1>

      <motion.p
        style={{
          opacity: contentOpacity,
          y: contentY,
          willChange: "transform, opacity",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.5,
        }}
        className={`text-lg sm:text-xl max-w-3xl mt-6 leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Terminus connects directly to your Gmail, extracts vendor confirmations,
        and flags anomalies before they contaminate your ERP.
      </motion.p>

      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
          scale: buttonScale,
          willChange: "transform, opacity",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.7,
        }}
        className="mt-12 flex flex-col sm:flex-row gap-5"
      >
        <a
          href="https://app.sproxx.io"
          className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] rounded-lg text-white font-semibold shadow-lg hover:shadow-[#4FC3F7]/40 transition-all hover:-translate-y-1"
        >
          Launch App
        </a>
        <a
          href="#features"
          className={`px-8 py-4 border rounded-lg font-semibold transition-all hover:-translate-y-1 ${
            isDark
              ? "border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7]/10"
              : "border-blue-600 text-blue-600 hover:bg-blue-50"
          }`}
        >
          Explore Features
        </a>
      </motion.div>

      <div className="h-[120vh]" />
    </section>
  );
}
