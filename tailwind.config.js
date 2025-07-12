/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add more paths if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};