/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class", // enables dark mode via "dark" class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scans all React files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
