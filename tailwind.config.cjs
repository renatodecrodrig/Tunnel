/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outer: ["Outer"],
        europa: ["Europa"],
      },
      colors: {
        rootblue: "#0098ED",
        "rootbleu-900": "#0061c8"
      }
    },
  },
  plugins: [],
};

module.exports = config;
