/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#4E70A9',
        green: '#5CC2AA',
        grey: '#5B5B5B',
        light: '#A4A4A4'
      }
    },
    fontFamily: {
      'heebo': "'Heebo', sans-serif",
      'kodchasan': "'Kodchasan', sans-serif"
    }
  },
  plugins: [],
}