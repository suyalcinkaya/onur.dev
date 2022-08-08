module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      animation: {
        reveal: 'reveal 1s ease-in-out'
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, filter: 'brightness(1) blur(20px)' },
          '10%': { opacity: 1, filter: 'brightness(2) blur(10px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0)' }
        }
      },
      lineHeight: {
        slack: '1.7',
        slacker: '1.75'
      },
      listStyleType: {
        circle: 'circle'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
