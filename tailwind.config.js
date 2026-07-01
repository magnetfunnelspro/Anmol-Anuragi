/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#050505",
        prime: "#1CB3AA",
        accent: "#68D7D2",
      },
    },
  },
  plugins: [],
};
