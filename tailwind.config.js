/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kiss-bg": "#000018",
        "kiss-accent": "#24ff54",
        "kiss-purple": "#6715ff",
        "kiss-pink": "#fd00ff",
        "kiss-card": "#66147a"
      },
      fontFamily: {
        sans: ["AvertaStd", "system-ui", "sans-serif"],
        display: ["Jersey 10", "cursive"]
      },
      backgroundImage: {
        "kiss-gradient": "linear-gradient(135deg, #6715ff 0%, #fd00ff 50%, #24ff54 100%)"
      },
      boxShadow: {
        "neon-kiss": "0 0 20px rgba(36, 255, 84, 0.8)",
        "card-glow": "0 0 40px rgba(253, 0, 255, 0.35)"
      }
    }
  },
  plugins: []
};


