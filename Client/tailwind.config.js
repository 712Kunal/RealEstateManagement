/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"],
        old: ["'Fredoka'", "sans-serif"],
        courgette: ["'Courgette'", "sans-serif"],
        permanent: ["'Permanent Marker'", "cursive"],
        sidebar: ["'Montserrat Alternates'", "sans-serif"],
      },
      fontWeight: {
        side: 400,
      },
    },
  },
  plugins: [],
};
