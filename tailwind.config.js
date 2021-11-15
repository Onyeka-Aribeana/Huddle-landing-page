module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },

    extend: {
      colors: {
        violet: "#674baf",
        magenta: "#e882e8",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        text: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/images/bg-desktop.svg')",
        mobile: "url('/images/bg-mobile.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
