/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: "#2665ad",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
