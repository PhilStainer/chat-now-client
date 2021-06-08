const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
