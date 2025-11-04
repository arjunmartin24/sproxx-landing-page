import { motion } from "framer-motion";
import './index.css';

export default function App() {
  return (
    <div className="bg-[#0B0C10] min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] bg-clip-text text-transparent mb-6"
      >
        AI Watchdog for Supply Chain Integrity
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-gray-400 text-lg max-w-2xl"
      >
        Protect your margins, catch vendor price variances, and prevent backorder disruptions — before they reach your ERP.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a href="https://app.sproxx.io" className="px-8 py-3 bg-[#6C63FF] text-white rounded-lg shadow-lg hover:bg-[#4FC3F7] transition">
          Launch Platform
        </a>
        <a href="#learn" className="px-8 py-3 border border-[#6C63FF] text-[#6C63FF] rounded-lg hover:bg-[#6C63FF]/10 transition">
          Learn More
        </a>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 text-gray-500 text-sm"
      >
        © 2025 Sproxx Inc. All rights reserved.
      </motion.footer>
    </div>
  );
}
