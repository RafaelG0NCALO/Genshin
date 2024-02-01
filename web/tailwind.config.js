/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        'curve': '0px 0px 0 5px #111',
        'curve2': '-10px -10px 0 10px #1E1F27',
        'curve3': '-20px -20px 0 20px #1E1F27',
      },
      animation: {
        slideDown: "slideDown 1s ease-in-out",
        slideUpScale: "slideUpScale 1s ease-in-out",
        slideLeft: "slideLeft 1s ease-in-out",
        fadeIn: "fadeIn 1.3s ease-in-out",
        cardUp: "cardUp 1s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": {transform: "translate(256px, -256px) scale(0.5)",},
          "100%": {transform: "translate(0, 0) scale(1)",},
        },
        slideUpScale: {
          "0%": {
            transform: "translateY(100%) scale(0.5)",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(-100%) scale(0.5)",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        cardUp: {
          "0%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(0) ",
          },
        },
      },
    },
  },
  plugins: [],
}