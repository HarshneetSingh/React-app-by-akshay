/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,}",
  ],
  theme: {

    extend: {
      colors: {
        'headerHoverColor': '#fc8019',
        'sortByBtnColor':'#686b78',
        'sortByBtnHoverColor':'#3d4152'
      },
    },
  },
  plugins: [],
}
