import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Navbar({ scrollProgress, isDark = true }) {
  return (
    <motion.nav
      style={{
        opacity: useTransform(scrollProgress, [0, 0.2, 0.5], [0, 0, 1]),
        backdropFilter: useTransform(
          scrollProgress,
          [0, 0.2, 0.5],
          [0, 0, 12]
        ),
        willChange: "opacity, backdrop-filter",
      }}
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#07080A]/60 border-b border-white/10 flex items-center px-6"
    >
      {/* Fixed navbar logo - appears when transition completes */}
      <motion.h1
        style={{
          opacity: useTransform(scrollProgress, [0.9, 1], [0, 1]),
          willChange: "opacity",
        }}
        className="text-2xl font-extrabold bg-gradient-to-r from-[#7C4DFF] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(79,195,247,0.5)]"
      >
        Sproxx
      </motion.h1>
    </motion.nav>
  );
}

