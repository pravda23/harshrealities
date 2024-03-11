/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: "#2665ad",
      },
      keyframes: {
        customPing: {
          "0%": {
            transform: "scale(1)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(1.2)",
            opacity: 1,
          },

          "100%": {
            transform: "scale(1)",
            opacity: 0,
          },
        },
      },
      animation: {
        customPing: "customPing 500ms cubic-bezier(0, 0, 0.2, 1) 1",
      },
    },
  },
  plugins: [],
};
