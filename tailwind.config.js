/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },
    colors: {
      primary: {
        cyna: 'hsl(193, 38%, 86%)',
        green: 'hsl(150, 100%, 66%)'
      },
      neutral: {
        blue: {
          grayish: 'hsl(217, 19%, 38%)',
          'dark-grayish': 'hsl(217, 19%, 24%)',
          dark: 'hsl(218, 23%, 16%)'
        }
      }
    },
    extend: {
      fontSize: {
        quote: '1.75rem'
      },
      boxShadow: {
        'dice-button': '0 0 10px 0 hsl(150, 100%, 66%)'
      }
    }
  },
  plugins: []
}
