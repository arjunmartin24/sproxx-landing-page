import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import BlurText from "./components/BlurText";
import Hyperspeed from "./components/Hyperspeed";
import { hyperspeedPresets } from "./components/hyperspeedPresets";
import Counter from "./components/Counter";
import ServiceCard from "./components/ServiceCard";
import {
  BarChart3,
  Repeat2,
  FileSpreadsheet,
  Sparkles,
  Mail,
  Wrench,
} from "lucide-react";
import "./index.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const shouldReduceMotion = useReducedMotion();

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
          {/* NAVBAR                         */}
          {/* ------------------------------ */}
          <nav
            className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b ${
              isDark
                ? "bg-black/60 border-[#1A1C24]"
                : "bg-white/80 border-gray-200"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] bg-clip-text text-transparent"
              >
                SPROXX
              </motion.div>
              <div className="hidden md:flex items-center gap-8">
                {["Services", "Impact", "Pricing", "Work Samples", "FAQ", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className={`text-sm font-medium hover:text-[#4FC3F7] transition-colors ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {link}
                    </a>
                  )
                )}
                <a
                  href="#contact"
                  className="px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Get a Quote
                </a>
              </div>
              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-300"
                aria-label="Menu"
              >
                ☰
              </button>
            </div>
          </nav>

          {/* ------------------------------ */}
          {/* HERO SECTION                   */}
          {/* ------------------------------ */}
          <section
            id="hero"
            className={`relative z-20 min-h-screen transition-colors duration-300 overflow-hidden ${
              isDark ? "bg-transparent" : "bg-white/90"
            }`}
          >
            {/* Animated aurora blob background */}
            {isDark && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <motion.div
                  className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
                  style={{
                    background: "radial-gradient(circle, rgba(124, 77, 255, 0.4) 0%, rgba(79, 195, 247, 0.2) 50%, transparent 100%)",
                  }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: [0, 100, -50, 0],
                          y: [0, -80, 50, 0],
                          scale: [1, 1.2, 0.9, 1],
                          opacity: [0.2, 0.3, 0.15, 0.2],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? {}
                      : {
                          duration: 20,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
                  style={{
                    background: "radial-gradient(circle, rgba(79, 195, 247, 0.4) 0%, rgba(0, 229, 255, 0.2) 50%, transparent 100%)",
                  }}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: [0, -80, 60, 0],
                          y: [0, 100, -40, 0],
                          scale: [1, 0.8, 1.3, 1],
                          opacity: [0.15, 0.25, 0.1, 0.15],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? {}
                      : {
                          duration: 25,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                />
              </motion.div>
            )}
            <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 pb-32">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight
                  bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF]
                  bg-clip-text text-transparent
                  w-full mb-6 relative z-20
                  animate-gradient
                  px-4
                "
              >
                We handle operational work so your team can focus on what matters.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className={`text-lg md:text-xl max-w-4xl mt-6 leading-relaxed px-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Excel automation, PDF data extraction, reporting, and internal tools — delivered quickly, securely, and with minimal overhead.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 flex flex-col sm:flex-row gap-5"
              >
                <a
                  href="#contact"
                  className="relative px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7]
                             rounded-lg text-white font-semibold shadow-lg
                             hover:shadow-[#4FC3F7]/40 transition-all hover:-translate-y-1
                             animate-gradient overflow-hidden"
                >
                  {/* Animated gradient glow behind button */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF] 
                               opacity-0 hover:opacity-20 transition-opacity duration-300
                               animate-gradient blur-xl -z-10"
                    style={{ filter: "blur(20px)" }}
                  />
                  <span className="relative z-10">Get a Quote</span>
                </a>

                <a
                  href="#services"
                  className={`relative px-8 py-4 border rounded-lg font-semibold transition-all hover:-translate-y-1 overflow-hidden ${
                    isDark
                      ? "border-[#4FC3F7] text-[#4FC3F7] hover:bg-[#4FC3F7]/10"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {/* Animated gradient border glow */}
                  <span
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF] 
                               opacity-0 hover:opacity-30 transition-opacity duration-300
                               animate-gradient-border blur-sm -z-10 ${
                                 isDark ? "" : "mix-blend-mode-overlay"
                               }`}
                    style={{ filter: "blur(8px)" }}
                  />
                  <span className="relative z-10">See Services</span>
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className={`mt-8 text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Trusted by ops teams
              </motion.p>
            </div>
          </section>

          {/* ------------------------------ */}
          {/* SERVICES SECTION               */}
          {/* ------------------------------ */}
          <section
            id="services"
            className={`relative z-10 py-32 px-6 text-center ${
              isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
            }`}
          >
            <BlurText
              text="What We Do"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-semibold mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  Icon: BarChart3,
                  title: "Excel Cleanup & Dashboards",
                  desc: "Transform messy spreadsheets into clean, organized data with automated formatting and visual dashboards.",
                  delivery: "24–72h",
                },
                {
                  Icon: Repeat2,
                  title: "Report Automation",
                  desc: "Power Query and CSV pipelines that run on schedule, pulling data and generating reports automatically.",
                  delivery: "24–72h",
                },
                {
                  Icon: FileSpreadsheet,
                  title: "PDF → Excel Extraction",
                  desc: "Extract structured data from PDFs into Excel format, ready for analysis and reporting.",
                  delivery: "24–72h",
                },
                {
                  Icon: Sparkles,
                  title: "Data Cleanup & Deduping",
                  desc: "Remove duplicates, fix formatting errors, standardize entries, and validate data integrity.",
                  delivery: "24–72h",
                },
                {
                  Icon: Mail,
                  title: "Email Templates & SOPs",
                  desc: "Vendor and customer email templates, plus standard operating procedures for your team.",
                  delivery: "24–72h",
                },
                {
                  Icon: Wrench,
                  title: "Tiny Internal Tools",
                  desc: "Simple scripts and lightweight apps that automate repetitive tasks and save hours each week.",
                  delivery: "24–72h",
                },
              ].map((service, i) => (
                <ServiceCard
                  key={i}
                  Icon={service.Icon}
                  title={service.title}
                  desc={service.desc}
                  delivery={service.delivery}
                  isDark={isDark}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.9 }}
                />
              ))}
            </div>
          </section>

          {/* ------------------------------ */}
          {/* IMPACT SECTION                 */}
          {/* ------------------------------ */}
          <section
            id="impact"
            className={`relative z-10 py-32 px-6 ${
              isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <BlurText
                text="Common Ops Leaks — and what they typically cost"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl font-semibold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              />
              <p
                className={`text-center mb-16 max-w-3xl mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Typical ranges based on time saved, avoided rework, and reduced manual effort. Actual impact varies by volume and process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                {[
                  {
                    title: "Manual PDF → Excel entry",
                    whatHappens: "Teams retype confirmations, invoices, or packing slips into spreadsheets.",
                    typicalLeak: "2–6 hours/week",
                    impactMin: 200,
                    impactMax: 900,
                  },
                  {
                    title: "Pricing mistakes that slip through",
                    whatHappens: "Small unit-price issues go unnoticed until margin is gone.",
                    typicalLeak: "0.5–2% on affected orders",
                    impactMin: 500,
                    impactMax: 5000,
                  },
                  {
                    title: "Reports rebuilt every week",
                    whatHappens: "The same report is recreated manually from exports and emails.",
                    typicalLeak: "1–4 hours/week",
                    impactMin: 150,
                    impactMax: 600,
                  },
                  {
                    title: "Dirty / duplicated master data",
                    whatHappens: "Duplicate vendors/customers/items create rework and errors downstream.",
                    typicalLeak: "recurring cleanup + preventable mistakes",
                    impactMin: 200,
                    impactMax: 2000,
                  },
                  {
                    title: "No visibility → last-minute fire drills",
                    whatHappens: "Issues surface late, leading to expediting and avoidable rework.",
                    typicalLeak: "rush effort + delays",
                    impactMin: 300,
                    impactMax: 3000,
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all backdrop-blur-md group ${
                      isDark
                        ? "bg-[#0C0E13]/80 border border-[#1A1C24] hover:border-[#4FC3F7]/50 hover:shadow-[#4FC3F7]/30"
                        : "bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg"
                    }`}
                  >
                    <h3
                      className={`text-lg font-semibold mb-3 ${
                        isDark ? "text-[#4FC3F7]" : "text-blue-600"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <span className="font-medium">What happens:</span> {card.whatHappens}
                    </p>
                    <div className="space-y-2 mb-4">
                      <p
                        className={`text-xs ${
                          isDark ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        <span className="font-medium">Typical leak:</span> {card.typicalLeak}
                      </p>
                      <p
                        className={`text-base font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <span className="font-medium">Avg impact:</span> $<Counter value={card.impactMin} />–$<Counter value={card.impactMax} />/month
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className={`inline-flex items-center text-sm font-medium transition-colors ${
                        isDark
                          ? "text-[#4FC3F7] hover:text-[#7C4DFF]"
                          : "text-blue-600 hover:text-blue-700"
                      }`}
                    >
                      Fix this →
                    </a>
                  </motion.div>
                ))}
              </div>

              <p
                className={`text-center text-sm max-w-2xl mx-auto ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                These are directional estimates — we'll validate scope and expected savings before starting.
              </p>
            </div>
          </section>

          {/* ------------------------------ */}
          {/* PRICING SECTION                */}
          {/* ------------------------------ */}
          <section
            id="pricing"
            className={`relative z-10 py-32 px-6 text-center ${
              isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
            }`}
          >
            <BlurText
              text="Simple, Transparent Pricing"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-semibold mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "One-Time Fix",
                  priceStart: 50,
                  priceEnd: 150,
                  priceSuffix: "",
                  desc: "Perfect for one-off cleanup jobs, single report automation, or quick data extraction tasks.",
                },
                {
                  name: "Ops Booster",
                  priceStart: 200,
                  priceEnd: 500,
                  priceSuffix: "",
                  desc: "For larger projects like dashboard builds, multi-step automations, or complex data transformations.",
                },
                {
                  name: "Quiet Retainer",
                  priceStart: 50,
                  priceEnd: 100,
                  priceSuffix: "/mo",
                  desc: "Ongoing support for regular tasks, maintenance, and small improvements without the hassle.",
                },
              ].map((tier, i) => (
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
                  <h3
                    className={`text-2xl font-semibold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div
                    className={`text-3xl font-bold mb-4 bg-gradient-to-r from-[#4FC3F7] to-[#7C4DFF] bg-clip-text text-transparent`}
                  >
                    ${tier.priceStart}–$<Counter value={tier.priceEnd} />{tier.priceSuffix}
                  </div>
                  <p
                    className={`text-base ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {tier.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className={`mt-12 text-sm max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Exact price depends on scope — you'll get a quote before we
              start.
            </motion.p>
          </section>

          {/* ------------------------------ */}
          {/* WORK SAMPLES SECTION           */}
          {/* ------------------------------ */}
          <section
            id="work-samples"
            className={`relative z-10 py-32 px-6 text-center ${
              isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
            }`}
          >
            <BlurText
              text="Example Outcomes"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-semibold mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "PO tracker that updates itself weekly",
                  desc: "Automated purchase order tracking system that pulls data and refreshes without manual input.",
                },
                {
                  title: "Vendor price variance sheet",
                  desc: "Dashboard that compares quoted prices vs actual invoices and flags discrepancies automatically.",
                },
                {
                  title: "Inventory aging dashboard",
                  desc: "Visual breakdown of inventory by age, updated daily with automated data pulls.",
                },
                {
                  title: "PDF confirmations to structured Excel",
                  desc: "Automated extraction pipeline that converts vendor PDF confirmations into clean Excel files.",
                },
              ].map((sample, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 ${
                    isDark
                      ? "bg-[#0C0E13]/80 border border-[#1A1C24]"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isDark ? "text-[#4FC3F7]" : "text-blue-600"
                    }`}
                  >
                    {sample.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {sample.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ------------------------------ */}
          {/* FAQ SECTION                    */}
          {/* ------------------------------ */}
          <section
            id="faq"
            className={`relative z-10 py-32 px-6 ${
              isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
            }`}
          >
            <BlurText
              text="Frequently Asked Questions"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-semibold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            />

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Will my employer find out?",
                  a: "No. We don't use client logos, screenshots, or internal references publicly. Work is handled privately using separate tooling, and we can sign an NDA if needed. Your work stays confidential.",
                },
                {
                  q: "Do you need system access?",
                  a: "Usually no. We don't log into your systems. Most work is done using exports, reports, and files you provide, and we return cleaned files, automations, or tools back to you.",
                },
                {
                  q: "How fast is delivery?",
                  a: "Most requests are completed within 24–72 hours. Larger automations may take longer, but you'll get a clear timeline and quote before we start.",
                },
                {
                  q: "What do you need from me to start?",
                  a: "A short description of what you want and the actual files involved. If anything is sensitive, you can redact it — otherwise we work with real business data, like professionals.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-6 ${
                    isDark
                      ? "bg-[#0C0E13]/80 border border-[#1A1C24]"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-[#4FC3F7]" : "text-blue-600"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ------------------------------ */}
          {/* FINAL CTA SECTION              */}
          {/* ------------------------------ */}
          <section
            id="contact"
            className="relative z-10 py-32 px-6 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          >
            <BlurText
              text="Send the mess. We'll make it clean."
              delay={80}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
            />
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
              Ready to offload that ops work? Get a quote in minutes.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="mailto:Terminussentinelai@gmail.com"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Get a Quote
              </a>
              <a
                href="mailto:Terminussentinelai@gmail.com"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all hover:-translate-y-1"
              >
                Email Us
              </a>
            </div>
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
            <div className="max-w-7xl mx-auto px-6">
              <p className="mb-4">© 2026 SPROXX. Built for ops teams.</p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a
                  href="#"
                  className={`hover:text-[#4FC3F7] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className={`hover:text-[#4FC3F7] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Terms
                </a>
                <a
                  href="#contact"
                  className={`hover:text-[#4FC3F7] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
