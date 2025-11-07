import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-[0_0_15px_#4FC3F7]"
      >
        The AI Watchdog for Supply Chain Integrity
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-300 text-lg max-w-3xl mt-6 leading-relaxed"
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
          className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] rounded-lg text-white font-semibold shadow-lg hover:shadow-[#4FC3F7]/40 transition-all hover:-translate-y-1"
        >
          Launch App
        </a>
        <a
          href="#features"
          className="px-8 py-4 border border-[#4FC3F7] text-[#4FC3F7] rounded-lg font-semibold hover:bg-[#4FC3F7]/10 transition-all hover:-translate-y-1"
        >
          Explore Features
        </a>
      </motion.div>
    </section>
  );
}
