/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1C1E53",
        brandOrange: "#FCD980",
      },
    },
  },
  plugins: [],
};
