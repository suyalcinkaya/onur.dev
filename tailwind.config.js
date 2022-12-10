const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      animation: {
        reveal: 'reveal 1s ease-in-out'
      },
      fontFamily: {
        mono: ['Menlo', ...defaultTheme.fontFamily.mono]
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, filter: 'brightness(1) blur(20px)' },
          '10%': { opacity: 1, filter: 'brightness(2) blur(10px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0)' }
        }
      },
      lineHeight: {
        slacker: '1.75'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  }
}
