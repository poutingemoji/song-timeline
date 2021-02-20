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
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
