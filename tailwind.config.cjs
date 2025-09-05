/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient-move 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        particle: "particle 15s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 15s linear infinite",
      },
      keyframes: {
        "gradient-move": {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        particle: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-100vh) translateX(20px)" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
}
