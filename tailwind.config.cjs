module.exports = {
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      blue: {
        primary: "hsl(246, 80%, 60%)",
        soft: "hsl(195, 74%, 62%)",
        desaturated: "hsl(235, 45%, 61%)",
        pale: "hsl(236, 100%, 87%)",
        dark: "hsl(235, 46%, 20%)",
        "very-dark": "hsl(226, 43%, 10%)",
      },
      green: "hsl(145, 58%, 55%)",
      violet: "hsl(264, 64%, 52%)",
      red: "hsl(348, 100%, 68%)",
      orange: "hsl(15, 100%, 70%)",
      yellow: "hsl(15, 100%, 70%)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
