import { motion } from "framer-motion";
import { useEffect } from "react";
import './index.css';

export default function App() {
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
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
        ctx.fillStyle = "rgba(100,180,255,0.2)";
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#06080C] via-[#0B0C10] to-[#10121A] text-center text-white">
      {/* Floating particles layer */}
      <canvas id="particleCanvas" className="absolute inset-0 z-0"></canvas>

      {/* Gradient glow */}
      <motion.div
        className="absolute top-0 left-1/2 w-[700px] h-[700px] -translate-x-1/2 bg-gradient-to-r from-indigo-500/30 to-cyan-400/30 blur-[160px] rounded-full z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] bg-clip-text text-transparent drop-shadow-[0_0_10px_#4FC3F7]"
        >
          The AI Watchdog for Supply Chain Integrity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-300 text-lg max-w-2xl mt-4"
        >
          Protect your margins, detect supplier anomalies, and stay ahead of disruptions with real-time AI monitoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="https://app.sproxx.io" className="px-8 py-3 bg-[#6C63FF] text-white rounded-lg shadow-lg hover:bg-[#4FC3F7] transition">
            Launch Platform
          </a>
          <a href="#features" className="px-8 py-3 border border-[#6C63FF] text-[#6C63FF] rounded-lg hover:bg-[#6C63FF]/10 transition">
            Learn More
          </a>
        </motion.div>
      </div>

      {/* FEATURES SECTION */}
      <section id="features" className="relative z-10 py-40 px-6">
        <h2 className="text-4xl font-semibold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Powering Next-Gen Procurement Teams
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Procurement Intelligence",
              desc: "Instantly detect price variances, track backorders, and prevent costly data errors.",
            },
            {
              title: "Vendor Reliability",
              desc: "Measure lead-time accuracy and supplier performance trends with precision.",
            },
            {
              title: "Margin Shield",
              desc: "Predict future cost drifts and protect gross margins across complex supply chains.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#11131C] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-[#6C63FF]/20 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#4FC3F7]">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-gray-800 py-6 text-gray-500 text-sm">
        © 2025 Sproxx Inc. | Built for performance and clarity.
      </footer>
    </div>
  );
}
