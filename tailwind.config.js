/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'false', //or 'media' or 'class'
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'movil': {'min': '375px', 'max': '768'},
    },
  },
    plugins: [],
  }