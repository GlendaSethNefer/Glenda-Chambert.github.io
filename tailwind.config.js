/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: [],
    colors: {
      rosa: {
        100: '#edc5dc',
        300: '#d16ba5',
        500: '#972f6a',
        700: '#3e123b',
      },
      verdeaqua: {
        100: '#93f6ff',
        300: '#0aebff',
        500: '#008793',
        900: '#002d31',
      },
    },
    fontFamily: {
      sans: ['Balsamiq Sans', 'sans-serif'],
      serif: ['Marhey', 'serif'],
      gochi: ['Gochi Hand'],
      alegreya: ['Alegreya Sans'],
      explora: ['Explora'],
      gentium: ['Gentium Book Plus', 'Gentium Plus'],
      lato: ['Lato'],
      lora: ['Lora'],
      playfair: ['Playfair Display'],
      raleway: ['Raleway'],
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