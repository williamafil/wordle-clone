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
      },
      animation: {
        scaleDown: "scaleDown .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
