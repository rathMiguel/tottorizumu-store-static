/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#aacd06",
      secondary: "#d4eea8",
      black: "#000",
      white: "#fff",
      grey: {
        pale: "#eee"
      }
    },
    extend: {

    },
  },
  plugins: [],
}