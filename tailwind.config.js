/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2596be',
        secondary: '#8ab66a',
        accent: '#f7f7f7',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

