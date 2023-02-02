/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-color': '#0F241D',
        'primary-color' : '#69B99D',
        'secondary-color' : '#CCF4E6',
        'back-color' : '#f9f9f9',
        'gray' : '#767676',
        'light-gray' : '#E4E4E4'
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'dmsans': ['"DM Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
