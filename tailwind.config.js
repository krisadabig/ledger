const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "classic-blue": "#f5df4d",
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["even, odd"] },
  },
  plugins: [],
};
