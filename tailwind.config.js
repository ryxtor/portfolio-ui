/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        'Finger-Paint': ['"Finger Paint"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
