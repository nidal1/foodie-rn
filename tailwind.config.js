/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
