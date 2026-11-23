/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Design tokens z Figmy (KISS IT PWr 2027 → zmienne "kiss/*" i "color/*")
      colors: {
        kiss: {
          bg: "#000018", // kiss/bg – tło sekcji / hero
          page: "#100c1d", // color/blue/8 – tło całej strony
          surface: "#020210", // color/blue/4 – ciemne sekcje
          footer: "#050510", // stopka
          accent: "#24ff54", // kiss/accent – zieleń
          purple: "#6715ff", // kiss/purple – fiolet
          pink: "#fd00ff", // kiss/pink – róż / magenta
          lavender: "#d2aeff", // color/violet/84
          ice: "#f6ecff", // color/grey/96 – jasny lawendowy biały
        },
      },
      fontFamily: {
        display: ['"Jersey 10"', "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "24px", // promień kart i zdjęć w makiecie
      },
    },
  },
  plugins: [],
}
