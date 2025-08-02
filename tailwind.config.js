/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#b29cff",
          dark: "#0e0e16",
          accent: "#5865F2",
        },
      },
    },
  },
  plugins: [],
};
