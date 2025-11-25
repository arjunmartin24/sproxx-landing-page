import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Login from "../Login";

export default function Navigation({ isDark, onGridAccessClick, showLoginModal, onCloseLogin }) {
  const navigate = useNavigate();

  const handleGridAccessClick = () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    
    if (isLoggedIn) {
      // If logged in, navigate to /gridaccess
      navigate("/gridaccess");
    } else {
      // If not logged in, show login modal
      onGridAccessClick();
    }
  };

  const handleLoginSuccess = () => {
    // Close modal and navigate to /gridaccess
    onCloseLogin();
    navigate("/gridaccess");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all ${
          isDark
            ? "bg-[#0D0F15]/80 border-[#1A1C24]"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <div 
            className="text-2xl font-extrabold bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF] bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/")}
          >
            TERMINUS
          </div>

          {/* Menu Items */}
          <div className="flex items-center gap-6">
            <button
              onClick={handleGridAccessClick}
              className={`px-4 py-2 rounded-lg font-medium transition-all hover:-translate-y-0.5 ${
                isDark
                  ? "text-[#4FC3F7] hover:bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 hover:border-[#4FC3F7]"
                  : "text-blue-600 hover:bg-blue-50 border border-blue-200 hover:border-blue-400"
              }`}
            >
              GRID ACCESS
            </button>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onCloseLogin}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <button
                onClick={onCloseLogin}
                className={`absolute -top-12 right-0 text-2xl font-bold transition-colors ${
                  isDark ? "text-white hover:text-[#4FC3F7]" : "text-white hover:text-blue-400"
                }`}
              >
                ×
              </button>
              <Login onLogin={handleLoginSuccess} isModal={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

