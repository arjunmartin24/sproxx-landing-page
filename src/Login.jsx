import { useState } from "react";
import { motion } from "framer-motion";

export default function Login({ onLogin, isModal = false }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (username === "terminus" && password === "guardian123") {
      // Save login status to localStorage
      localStorage.setItem("loggedIn", "true");
      onLogin();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={`relative overflow-hidden ${isModal ? '' : 'min-h-screen bg-[#07080A]'} text-white flex items-center justify-center`}>
      {/* Background Glow Effect - only show when not modal */}
      {!isModal && (
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

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md px-8"
      >
        <div className="bg-[#0D0F15]/80 backdrop-blur-md border border-[#1A1C24] rounded-3xl p-10 shadow-lg">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF] bg-clip-text text-transparent">
              TERMINUS
            </h1>
            <p className="text-gray-400 text-sm">Enter your credentials to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-[#0C0E13]/80 border border-[#1A1C24] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] focus:border-transparent transition-all"
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0C0E13]/80 border border-[#1A1C24] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] focus:border-transparent transition-all"
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/30 rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] rounded-lg text-white font-semibold shadow-lg hover:shadow-[#4FC3F7]/40 transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] focus:ring-offset-2 focus:ring-offset-[#0D0F15]"
            >
              Sign In
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

