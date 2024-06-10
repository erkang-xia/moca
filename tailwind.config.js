/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#34BB8C',
        lightGray: 'rgb(244, 247, 247)',
      },
      width: {
        '45': '45%',
        '55': '55%',
      }
    },
  },
  plugins: [],
}
