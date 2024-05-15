/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#4285F4',
        lightBlue: '#DDE7F8',
        veryLightBlue: '#FAFCFF',
        green: '#00AC64',
        lightGreen: '#51F0A5',
        veryLightGreen: '#A3F5CE',
        darkGrey: '#484848',
        lightGrey: '#D9D9D9',
      }
    },
  },
  plugins: [],
}