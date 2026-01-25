import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function ServiceCard({ 
  Icon, 
  title, 
  desc, 
  delivery, 
  isDark, 
  initial, 
  whileInView, 
  transition 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group rounded-3xl p-8 shadow-lg transition-all backdrop-blur-md relative overflow-hidden ${
        isDark
          ? "bg-[#0C0E13]/80 border border-[#1A1C24] hover:border-[#4FC3F7]/50"
          : "bg-gray-50 border border-gray-200 hover:border-blue-300"
      }`}
      whileHover={{ y: -6 }}
    >
      {/* Subtle gradient sweep on hover */}
      {!shouldReduceMotion && (
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isDark
              ? "bg-gradient-to-r from-[#4FC3F7]/5 via-[#7C4DFF]/10 to-[#4FC3F7]/5"
              : "bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50"
          }`}
          animate={isHovered ? {
            x: ["-100%", "100%"],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ pointerEvents: "none" }}
        />
      )}

      {/* Icon Badge Container */}
      <div className="relative mb-6 flex justify-center">
        <motion.div
          className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${
            isDark
              ? "bg-gradient-to-br from-[#0C0E13] to-[#1A1C24] border border-[#4FC3F7]/30"
              : "bg-gradient-to-br from-gray-100 to-gray-200 border border-blue-200"
          }`}
          animate={{
            y: shouldReduceMotion ? 0 : [0, -4, 0],
            boxShadow: isHovered
              ? isDark
                ? "0 0 20px rgba(79, 195, 247, 0.4), 0 0 40px rgba(79, 195, 247, 0.2)"
                : "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.15)"
              : isDark
              ? "0 0 10px rgba(79, 195, 247, 0.1)"
              : "0 0 10px rgba(59, 130, 246, 0.1)",
          }}
          transition={{
            y: shouldReduceMotion
              ? {}
              : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
            boxShadow: {
              duration: 0.3,
            },
          }}
        >
          {/* Glow ring that expands on hover */}
          <motion.div
            className={`absolute inset-0 rounded-2xl ${
              isDark
                ? "bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF]"
                : "bg-gradient-to-r from-blue-400 to-purple-400"
            }`}
            animate={{
              scale: shouldReduceMotion ? 1 : isHovered ? [1, 1.2, 1.1] : 1,
              opacity: isHovered ? [0.3, 0.5, 0.3] : 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.5,
              repeat: shouldReduceMotion ? 0 : isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(8px)", zIndex: 0 }}
          />
          
          {/* Icon */}
          <motion.div
            className="relative z-10"
            animate={{
              rotate: shouldReduceMotion ? 0 : isHovered ? [0, 5, -5, 0] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <Icon
              className={`w-8 h-8 ${
                isDark
                  ? "text-[#4FC3F7]"
                  : "text-blue-600"
              }`}
              strokeWidth={2}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-semibold mb-3 ${
          isDark ? "text-[#4FC3F7]" : "text-blue-600"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm mb-4 ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {desc}
      </p>

      {/* Delivery Pill */}
      <div className="flex justify-center mt-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            isDark
              ? "bg-[#1A1C24] text-gray-300 border border-[#4FC3F7]/20"
              : "bg-gray-100 text-gray-600 border border-gray-200"
          }`}
        >
          Typical delivery: {delivery}
        </span>
      </div>
    </motion.div>
  );
}
