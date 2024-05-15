/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#4D2C5E',
      "pink":'#FDF8EE',

      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans - serif"],
        jost: ["Jost", "sans - serif"],
      },
    },
  },
  plugins: [],
};

