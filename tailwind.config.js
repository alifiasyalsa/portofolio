/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F6F6F2',
        'secondary': '#388087',
        'secondary-light': '#388087bf',
        'info': '#424242',
      },
    },
  },
  plugins: [],
}
