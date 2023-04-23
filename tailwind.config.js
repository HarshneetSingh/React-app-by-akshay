/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,}",
  ],
  theme: {

    extend: {
      colors: {
        'headerHoverColor': '#fc8019',
        'sortByBtnColor': '#686b78',
        'sortByBtnHoverColor': '#3d4152',
        'ttlRestroHeading': '#282c3f',
        'cardHover': '#3a3c41',
        'locationError': '#93959f',
        "selectedBgColor": "#3e4152",
        "selectedBorderColor": "#1B1E24"
      },
    },
  },
  plugins: [],
}
