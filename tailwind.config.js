module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**.tsx", "./src/layouts/**.tsx", "./src/widgets/**.tsx"],
  theme: {
    extend: {
      colors: {
        backdrop: "rgba(42, 42, 42, 0.69)",
        primaryRed: "#ff434f",
        primaryLight: "#e3e3e3",
        primaryLighter: "#e7e9ec",
        primaryDark: "#494949",
        primaryDarker: "#2e2e2e",
        primaryGray: "#8b8b8b",
        primaryDarkGray: "#727272",
        primaryLightGray: "#c6c6c6",
      }
    },
  },
};
