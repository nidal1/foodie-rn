/** @type {import('tailwindcss').Config} */

// const { Font } = require("expo");
// const loadFont = async () => {
//   await Font.loadAsync({
//     Montserrat: require("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Work+Sans:ital,wght@0,400;1,600&display=swap"),
//   });
// };
// loadFont();
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#FEBD11",
        "primary-2": "#FEC633",
        "secondary-1": "#131313",
        "secondary-2": "#4E4E4E",
        placeholder: "#8F9BB3",
        muted: "#F3F3F3",
        bright: "#FFFFFF",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        worksans: "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
