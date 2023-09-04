/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', 
            "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    // colors: {
    //   primary: '#22c55e',
    //   secondary: '#86efac'
    // },
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

