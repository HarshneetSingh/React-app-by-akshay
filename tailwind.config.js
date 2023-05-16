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
        'sortByBtnHoverColor': '#3D4152',
        'ttlRestroHeading': '#282c3f',
        'cardHover': '#3a3c41',
        'locationError': '#93959f',
        "selectedBgColor": "#3e4152",
        "selectedBorderColor": "#1B1E24",
        "lightColor": "#535665"
      },
        keyframes:{
        rightSlash:{
          '0%':{left:'1px'},
          '100%':{left:'16px'},
        }
      }
    },
  },
  plugins: [],
}
