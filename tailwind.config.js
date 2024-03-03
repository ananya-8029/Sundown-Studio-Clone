/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
      animation: {
        shape1Anime: "shape1Anime 6s linear alternate infinite",
        shape2Anime: "shape2Anime 5s ease-in alternate infinite",
        movingscroller: "movingscroller 12s linear infinite",
        shape3Anime: "shape3Anime 5s linear alternate infinite",
        shape4Anime: "shape4Anime 3s linear alternate infinite",
      },
      keyframes: {
        shape1Anime: {
          "from": { transform: "translate(-10%,10%)" },
          "to": { transform: "translate(10%,-10%)" },
        },
        shape2Anime: {
          "from": {transform: 'translate3d(50%,-15%,0)'},
          "to": {transform: 'translate3d(10%,4%,0)'},
        },
        movingscroller:{
          "from": {transform: 'translateX(0)'},
          "to": {transform: 'translateX(-100%)'}
        },
        shape3Anime:{
          "from": {transform: 'translate(-10%,5%)'},
          "to": {transform: 'translate(5%,-5%)'}
        },
        shape4Anime: {
          "from": { transform: "translate(-10%,10%)" },
          "to": { transform: "translate(10%,-10%)" },
        }
      },
    },
  },
  plugins: [],
};
