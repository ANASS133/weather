import React from "react";
import { motion } from "framer-motion";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border-b border-white/20 text-white shadow-lg transition-all"
    >
      {/* Animated Gradient Logo */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_200%]">
        🌤️ WeatherSnap
      </h1>

      {/* Toggle Button with Icons */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl border border-white/30 backdrop-blur-md transition shadow-inner"
      >
        {darkMode ? (
          <>
            <BsSunFill className="text-yellow-300 transition-transform scale-125" />
            <span className="text-sm">Light Mode</span>
          </>
        ) : (
          <>
            <BsMoonStarsFill className="text-blue-200 transition-transform scale-125" />
            <span className="text-sm">Dark Mode</span>
          </>
        )}
      </button>
    </motion.nav>
  );
};

export default Navbar;
