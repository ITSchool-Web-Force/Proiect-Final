/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      borderRadius: {
        extraLarge: "8rem",
      },
    },
  },
  plugins: [],
};
