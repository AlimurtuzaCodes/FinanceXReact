/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary:"#CBFC01",
        lgrey:"#b3b3b3",
        blackborder:"#2E2E2E",
        lblack:"#464646"
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        satoshi: ["Satoshi", "sans"],
      },
    },
  },
  plugins: [],
}
