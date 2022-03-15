module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        dense: "0 5px 5px rgba(0, 0, 0, 0.40)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.85, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        scaleDown: {
          from: {
            transform: "scale(1.5)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        shake: {
          "10%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%": {
            transform: "translate3d(2px, 0, 0)",
          },

          "30%": {
            transform: "translate3d(-4px, 0, 0)",
          },

          "40%": {
            transform: "translate3d(4px, 0, 0)",
          },
          "50%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "60%": {
            transform: "translate3d(4px, 0, 0)",
          },
          "70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          // "0%": {
          //   transform: "translateX(-5%)",
          //   // "animation-timing-function": "cubic-bezier(0.5, 0, .5, 1)",
          // },
          // "100%": {
          //   transform: "translateX(5%)",
          //   // "animation-timing-function": "cubic-bezier(0.5, 0, .5, 1)",
          // },
          // "50%": {
          //   transform: "none",
          //   // "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          // },
        },
      },
      animation: {
        scaleDown: "scaleDown .5s ease-in-out",
        bounceOnce: "bounce .7s ease-in",
        shake: "shake .5s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
