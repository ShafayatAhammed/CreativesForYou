/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        llg: "1250px",
        lmd: "900px",
        mmd: "823px",
        lxs: "450px",
        xs: "350px",
      },
      colors: {
        "pmr-color": "#F44335",
        "hover-pmr-color": "#e3392b",
        "green-color": "#00FF84",
        "dark-green-color": "#072125",
        "dark-gray-color": "#2D3142",
        "light-black-color": "#181818",
        "pink-color": "#F9CCC7",
        "pmr-bg-color": "#FAFAFA",
        "pmr-yellow-color": "#FFCB45",
        "footer-color": "#20484F",
        "dark-color": "#121212",
      },
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "5xl": "2.5rem",
      },
      boxShadow: {
        "pmr-shadow":
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [],
};
