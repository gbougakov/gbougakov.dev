module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" },
        //'light-mode': {raw: '(prefers-color-scheme: light)'}
      },
    },
  },
  variants: {
    boxShadow: ["responsive", "hover", "focus"],
  },
};
