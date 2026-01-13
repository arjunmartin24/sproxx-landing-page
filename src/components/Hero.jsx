import { motion } from "framer-motion";
import BlurText from "./BlurText.jsx";
import Hyperspeed from "./Hyperspeed.jsx";
import { hyperspeedPresets } from "./hyperspeedPresets.js";

export default function Hero({ isDark = true }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Hyperspeed effectOptions={hyperspeedPresets.one} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-28">

      <BlurText
        text="The AI Watchdog for Supply Chain Integrity"
        delay={120}
        animateBy="words"
        direction="top"
        className="
          text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight
          bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF]
          bg-clip-text text-transparent
          w-full flex justify-center
        "
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={`text-lg max-w-3xl mt-6 leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Terminus connects directly to your Gmail, extracts vendor confirmations,
        and flags anomalies before they contaminate your ERP.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex flex-col sm:flex-row gap-5"
      >
        <a
          href="https://app.sproxx.io"
          className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] 
                     rounded-lg text-white font-semibold shadow-lg 
                     hover:shadow-[#4FC3F7]/40 transition-all hover:-translate-y-1"
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
      </div>
    </section>
  );
}

