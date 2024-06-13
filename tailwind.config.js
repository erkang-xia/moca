/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#D9E6F4',
        primaryBlueDark: '#13598B',
        primaryBlueLight: '#EDF2F8',
        primaryBlueMedium: '#8AB8D9',

        primaryGreen:'#51BA94',
        primaryDark:'#212121'

      },
      width: {
        '45': '45%',
        '50':'50%',
        '55': '55%',
        '60':'60%',
        '65':'65%',
        '70':'70%',
        '75': '75%',
        '80':'80%',
        '85':'85%',
        '90': '90%',
        '1080':'1080px',
        '1':"1rem",
      },
      fontSize: {
        'logo': '1.125rem',
        '3xl': '2rem',
        '1.625':'1.625rem',
        '1.55': '1.55rem',
        '1.75': '1.75rem',
      },
      fontWeight: {
        'semibold' : 600,
      },
      boxShadow: {
        glow: '0 0 8px 2px rgba(255, 255, 255, 0.75)', // White glow
      }

    },
  },
  plugins: [],
}
