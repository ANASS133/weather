/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
  dropShadow: {
    glow: "0 0 10px rgba(255, 255, 255, 0.7)",
  },
  keyframes: {
    "fade-in": {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-5px)" },
    },
    "pulse-slow": {
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0.5 },
    },
    textShimmer: {
      "0%, 100%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
    },
  },
  animation: {
    "fade-in": "fade-in 1s ease-out forwards",
    float: "float 6s ease-in-out infinite",
    "pulse-slow": "pulse-slow 4s ease-in-out infinite",
    "text-shimmer": "textShimmer 3s ease-in-out infinite",
  },
  backgroundSize: {
    "200%": "200% 200%",
  },
}

  },
  plugins: [],
}
