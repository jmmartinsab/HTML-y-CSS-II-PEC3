module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "trade-winds": ['"Trade Winds"', "cursive"],
        "big-shoulder-st": ['"Big Shoulders Stencil Text"', "cursive"],
      },
      margin: {
        "3/100": "3.33%",
      },
      width: {
        "90vw": "90vw",
        "38vw": "38vw",
      },
      fontSize: {
        "7vw": "7vw",
        "6vw": "6vw",
        "4vw": "4vw",
        "2.8vw": "2.8vw",
        "1.8vw": "1.8vw",
        "1.3vw": "1.3vw",
      },
      minHeight: {
        1080: "1080px",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
      },
      backgroundImage: (theme) => ({
        group:
          "url('https://www.lorrainemusicacademy.com/wp-content/uploads/2016/09/Band-4_1.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
