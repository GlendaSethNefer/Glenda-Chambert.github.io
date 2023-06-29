/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'false', //or 'media' or 'class'
  content: [
    "./**/*.{html,js}",
    "./assets/publico/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  
  theme: {
    extend: {}
  },
  
  plugins: [require("tw-elements/dist/plugin.cjs")]
  }