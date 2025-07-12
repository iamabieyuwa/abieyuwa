/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        clash: ['"Clash Display"', 'sans-serif'],
        worksans: ['"Work Sans"', 'sans-serif'],
        // Default sans override (optional)
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
