/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", // Add the paths to all your HTML and React files
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "ruby": "#0f478d",
        },
        fontFamily: {
          sans: ["Graphik", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
      },
    },
    plugins: [],
  };
  