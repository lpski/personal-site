const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        content: '#f5f0f0',
        lemon: '#c2e812',
        royal: '#745296',
        palatanate: '#632a50',
        kombu: '#303a2b',
        amethyst: '#e17055',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
