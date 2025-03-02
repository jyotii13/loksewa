/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3b82f6',
          secondary: '#D0E6FD',
          highlight: '#F1E4D1',
          secondary1: '#3c50e0',
        },
      },
    },
    plugins: [],
  }
  