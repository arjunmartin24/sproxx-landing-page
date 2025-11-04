import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-40 bg-gradient-to-b from-[#0B0B12] to-[#151530] text-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        The Supply Chain Operating System
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-lg text-gray-400"
      >
        Purchasing, logistics, and vendor teams — working as one.
      </motion.p>
    </section>
  );
}

