/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./utils/**/*.{ts,tsx,js,jsx}",
  ],
  theme: { 
    extend: {
      screens: {
        mdd: "960px",
        animation: {
          borderPulse: "rotate 10s linear infinite",
        },
        keyframes: {
          borderPulse: {
            "0%": { transform: "rotate(0deg) scale(10)" },
            "100%": { transform: "rotate(-360deg) scale(10)" },
          },
        },
      },

      colors: {
        primary: "#10B981",
        offWhite: "#edece8",
        lightWarm: "#e9e1d6",
        goldenOrange: "#dd9933",
        // softMintGreen: "#599066",
        pestachio: "#CCE7BF",
        pestachio2: "#B7CFAB",
        softMintGreen: "#84B067",
        bodyColor: "#FBF6DC",
        paleSpringGreen: "#cce7bf",
        sageGreen: "#b4d7af",
        logoGold: "#CA852D",
        whiteGray: "#838383",
        dairyCream: "#F9E4BC",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
        tangerine: ["Tangerine", "cursive"],
        greatvibes: ["var(--font-greatvibes)", "cursive"],
        pacifico: ["var(--font-pacifico)", "cursive"],
        playfair: ["var(--font-playfair)", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
