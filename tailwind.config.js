/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        secondary: "#21213f",
        textLight: "#e0e0e0",
        textMedium: "#b0b0d0",
        purpleAccent: "#8a2be2",
        blueAccent: "#4682b4",
        borderCustom: "#3b3b5b"
      }
    },
  },
  plugins: [],
}