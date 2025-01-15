/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
        'body':'#fefce8'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
};

