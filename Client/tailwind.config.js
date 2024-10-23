/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"],
        old: ["'Fredoka'", "sans-serif"],
        rubik: ["Rubik Wet Paint", "sans-serif"],
      },
      fontWeight: {
        "rubik-normal": 400,
      },
    },
  },
  plugins: [],
};
