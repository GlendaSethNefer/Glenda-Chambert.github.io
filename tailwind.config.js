/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Balsamiq Sans', 'sans-serif'],
      serif: ['Marhey', 'serif'],
    },
  },

  content: [
    "./**/*.{html,js}",
    "./assets/publico/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
    
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
  }