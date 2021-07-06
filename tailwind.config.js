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
        darkRiver: '#636e72',

        sky: '#74b9ff',
        void: '#192a56',
        deepwater: '#3c6382',
        poppy: '#fa983a',
        aurora: '#78e08f',
        mandarin: '#e55039',


        cosmic: '#1D2028',
      },
      scale: {
        '101': '1.01',
        '102': '1.02'
      }
    },
  },
  variants: {
    extend: {
      // transform: ['hover', 'focus'],
      // translate: ['hover', 'focus'],
      // scale: ['hover', 'focus'],
      // borderColor: ['hover', 'focus']
    },
  },
  plugins: [],
}
