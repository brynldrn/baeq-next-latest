const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-black': '#222831',
        'theme-gray': '#393E46',
        'theme-blue': '#3F72AF',
        'theme-light-blue': '#00ADB5',
        'theme-white': '#EEEEEE'
      },
      fontFamily: {
        'sans': ['var(--font-manrope)', ...fontFamily.sans],
        'mono': ['var(--font-firacode)', ...fontFamily.mono]
      }
    },
  },
  plugins: [],
}
