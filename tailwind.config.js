/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        "olive-green": "#808000",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        "gradient-cloudCity":
          "linear-gradient(90deg, #3A6A59 ,    #A7A88A , #3A6A59, #A7A88A)",
      }),
      content: {
        brush: "url('./assets/brush.png)",
        person1: "url('./assets/person-1.png)",
        person2: "url('./assets/person-2.png)",
        person3: "url('./assets/person-3.png)",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1320px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
