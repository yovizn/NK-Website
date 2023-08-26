/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        clashDisplay: ["Clash Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        baiJamjuree: ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        text: "#f5f5f5",
        background: "#050505",
        primary: "#0cc0df",
        secondary: "#1d1d1b",
        accent: "#858580",
      },
    },
  },
  plugins: [],
};
