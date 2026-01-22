import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import BlurText from "./components/BlurText";
import Hyperspeed from "./components/Hyperspeed";
import { hyperspeedPresets } from "./components/hyperspeedPresets";
import "./index.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Hyperspeed Background */}
      <div className="fixed inset-0 z-0 w-screen h-screen">
        <Hyperspeed effectOptions={hyperspeedPresets.three} />
      </div>
      
      <div className="relative z-10">
      <div
        className={`relative overflow-hidden transition-colors duration-300 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {/* ------------------------------ */}
        {/* THEME TOGGLE BUTTON            */}
        {/* ------------------------------ */}
        <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 w-14 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        style={{
          backgroundColor: isDark ? "#1A1C24" : "#E5E7EB",
        }}
        aria-label="Toggle theme"
      >
        <motion.div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: isDark ? "#4FC3F7" : "#FBBF24",
          }}
          animate={{
            x: isDark ? 0 : 24,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isDark ? (
            <span className="text-white text-xs">🌙</span>
          ) : (
            <span className="text-white text-xs">☀️</span>
          )}
        </motion.div>
      </button>

      {/* ------------------------------ */}
      {/* FIXED GLOW BEHIND EVERYTHING   */}
      {/* ------------------------------ */}
      {isDark && (
        <motion.div
          className="
            fixed 
            top-0 
            left-1/2 
            -translate-x-1/2 
            w-[1200px] 
            h-[1200px] 
            bg-gradient-to-r 
            from-[#4FC3F7]/10 
            to-[#7C4DFF]/10 
            blur-[250px] 
            rounded-full 
            -z-10 
            pointer-events-none
          "
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      )}

      {/* ------------------------------ */}
      {/* HERO SECTION                    */}
      {/* ------------------------------ */}
      <Hero isDark={isDark} />

      {/* ------------------------------ */}
      {/* FEATURES SECTION                */}
      {/* ------------------------------ */}
      <section id="features" className={`relative z-10 py-32 px-6 text-center ${
        isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
      }`}>
        <BlurText
          text="Supply Chain Armor With a Memory"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl font-semibold mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[ 
            {
              icon: "📥",
              title: "Email Integration",
              desc: "Connect securely via OAuth 2.0 and auto-pull vendor confirmations and PDF attachments.",
            },
            {
              icon: "🔍",
              title: "PDF Intelligence",
              desc: "Extract item, price, and delivery data using adaptive OCR + AI-backed template detection.",
            },
            {
              icon: "⚖️",
              title: "Variance Detection",
              desc: "Flag overcharges, fake ship dates, or missing discounts before they contaminate your ERP.",
            },
            {
              icon: "📊",
              title: "Supplier KPI Engine",
              desc: "Track fulfillment accuracy, price behavior, and backorder rates per vendor.",
            },
            {
              icon: "🧠",
              title: "Self-Learning Master",
              desc: "Terminus learns from every confirmation to strengthen your vendor baseline over time.",
            },
            {
              icon: "💬",
              title: "Purchaser Power Tools",
              desc: "Question orders with one click, export proof reports, and build negotiation leverage.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.9 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition-all backdrop-blur-md ${
                isDark
                  ? "bg-[#0C0E13]/80 border border-[#1A1C24] hover:shadow-[#4FC3F7]/30"
                  : "bg-gray-50 border border-gray-200 hover:shadow-lg"
              }`}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3
                className={`text-2xl font-semibold mb-3 ${
                  isDark ? "text-[#4FC3F7]" : "text-blue-600"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-base ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------ */}
      {/* HOW IT WORKS                   */}
      {/* ------------------------------ */}
      <section
        className={`relative z-10 py-32 px-6 text-center ${
          isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <BlurText
          text="How Terminus Works"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl font-semibold mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "1️⃣",
              title: "Upload Vendor PDFs",
              desc: "Drop in your vendor confirmations or auto-import from your email inbox.",
            },
            {
              step: "2️⃣",
              title: "AI Extraction & Validation",
              desc: "Our AI reads, validates, and compares pricing, quantities, and delivery dates in seconds.",
            },
            {
              step: "3️⃣",
              title: "Instant Alerts",
              desc: "Get instant alerts for cost drifts, backorders, or mismatched part numbers.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-10 shadow-sm hover:shadow-md transition-all hover:-translate-y-2 ${
                isDark
                  ? "bg-[#0C0E13]/80 border border-[#1A1C24]"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="text-5xl mb-4">{f.step}</div>
              <h3
                className={`text-2xl font-semibold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-base ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------ */}
      {/* INTEGRATIONS                   */}
      {/* ------------------------------ */}
      <section
        className={`relative z-10 py-24 px-6 text-center ${
          isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <BlurText
          text="Integrates Seamlessly With"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl font-semibold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        />

        <div
          className={`flex flex-wrap justify-center items-center gap-10 text-lg font-medium ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {["Epicor P21", "SAP", "NetSuite", "QuickBooks", "Excel / CSV"].map(
            (name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className={`px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all ${
                  isDark
                    ? "bg-[#0C0E13]/80 border border-[#1A1C24]"
                    : "bg-white border border-gray-200"
                }`}
              >
                {name}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ------------------------------ */}
      {/* FINAL CTA                      */}
      {/* ------------------------------ */}
      <section className="relative z-10 py-32 px-6 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <BlurText
          text="Ready to Modernize Your Procurement?"
          delay={80}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
        />
        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
          Get early access to Terminus and bring automated vendor validation to your supply chain today.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:terminussentinelai@gmail.com"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
          <a
            href="https://app.sproxx.io"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all hover:-translate-y-1"
          >
            Launch Platform
          </a>
        </div>
      </section>

      {/* ------------------------------ */}
      {/* CTA STRIP                      */}
      {/* ------------------------------ */}
      <section
        className={`relative z-10 py-28 text-center border-y ${
          isDark
            ? "bg-black/80 backdrop-blur-sm border-[#1A1C24]"
            : "bg-white/90 backdrop-blur-sm border-gray-200"
        }`}
      >
        <BlurText
          text="See Every Confirmation. Catch Every Anomaly."
          delay={80}
          animateBy="words"
          direction="top"
          className="text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`max-w-2xl mx-auto mb-12 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Terminus transforms your Gmail inbox into a proactive procurement shield.
          Detect vendor errors, analyze behavior, and protect margins — all automatically.
        </motion.p>

        <a
          href="https://app.sproxx.io"
          className="inline-block px-10 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] rounded-lg text-white font-semibold shadow-lg hover:shadow-[#4FC3F7]/40 hover:-translate-y-1 transition-all"
        >
          Launch Terminus
        </a>
      </section>

      {/* ------------------------------ */}
      {/* FOOTER                         */}
      {/* ------------------------------ */}
      <footer
        className={`relative z-10 border-t py-10 text-sm text-center ${
          isDark
            ? "bg-black/80 backdrop-blur-sm border-gray-800 text-gray-500"
            : "bg-white/90 backdrop-blur-sm border-gray-200 text-gray-600"
        }`}
      >
        <p>© 2026 SPROXX — Terminus: The P21 PO Sentinel.</p>
      </footer>
      </div>
      </div>
    </div>
  );
}
