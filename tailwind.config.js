// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './dist/*.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      green: colors.emerald,
      teal: colors.teal,
      blue: colors.blue,
      sky: colors.sky,
      coolGray: colors.coolGray,
      fuchsia: colors.fuchsia,
    },
    fontFamily: {
      'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'crimson': ['Crimson\\ Pro', ...defaultTheme.fontFamily.serif],
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      display: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
