/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js", // ✅ Added Preline
  ],
  theme: {
    screens: {
      md: "767px", // Default is now up to 1000px, and md starts from 1001px
    },
    extend: {
      colors: {
        appYellow: "var(--yellow)",
        halfBlack: "var(--half-balck)",
        appGray: "var(--gray)",
      },
    },
  },
  plugins: [],
};
