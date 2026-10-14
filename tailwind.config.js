/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4f8",
          100: "#d6e5ee",
          200: "#adc9dd",
          300: "#7ea8c6",
          400: "#4d80a8",
          500: "#2f5f87",
          600: "#1f4a6d",
          700: "#173a56",
          800: "#122c42",
          900: "#0c1e2d",
          950: "#081521",
        },
        teal: {
          50: "#e9f7f4",
          100: "#c9ece3",
          200: "#9edccb",
          300: "#69c6ac",
          400: "#3aab8d",
          500: "#1f9074",
          600: "#17755f",
          700: "#145e4d",
          800: "#124a3d",
          900: "#0f3c33",
        },
        sand: {
          50: "#f9f8f5",
          100: "#f2f0e9",
          200: "#e6e2d6",
          300: "#d3ccba",
          400: "#b6ac93",
        },
        gold: {
          400: "#e0aa4f",
          500: "#c9902f",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(12,30,45,0.04), 0 8px 24px -8px rgba(12,30,45,0.10)",
        cardHover: "0 4px 8px rgba(12,30,45,0.06), 0 16px 32px -12px rgba(12,30,45,0.16)",
      },
      backgroundImage: {
        "pulse-line": "url('/pulse-texture.svg')",
      },
      keyframes: {
        pulseDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDraw: "pulseDraw 2.4s ease-out forwards",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
