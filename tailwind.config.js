module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        instagram: ["Pacifico", "cursive"],
        linkedin: ["Nunito Sans", "sans-serif"],
        github: ["Source Sans Pro", "sans-serif"],
        facebook: ["Roboto", "sans-serif"],
      },
      keyframes: {
        slideLeftToRight: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(45%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideRightToLeft: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slideLeftToRight: "slideLeftToRight 30s linear infinite",
        slideRightToLeft: "slideRightToLeft 30s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-pause": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
};
