/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#050505",
        orange: "#EA6D35",
        lightOrange: "#EAA179",
      },
    },
  },
  plugins: [],
};
