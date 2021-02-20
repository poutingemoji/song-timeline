module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#9c9c9c",
          DEFAULT: "#333333",
          dark: "#121212",
          darker: "#070707",
        },
        white: "#f3f3f3",
        celadon: "#ace1af",
        brown: "#563b30",
      },
      width: {
        "1/16": "6.25%",
        "2/16": "12.5%",
        "3/16": "18.75%",
        "4/16": "25%",
        "5/16": "31.25%",
        "6/16": "37.5%",
        "7/16": "43.75%",
        "8/16": "50%",
        "9/16": "56.25%",
        "10/16": "62.5%",
        "11/16": "68.75%",
        "12/16": "75%",
        "13/16": "81.25%",
        "14/16": "87.5%",
        "15/16": "93.75%",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
