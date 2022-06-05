const { fontFamily } = require('tailwindcss/defaultTheme')

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
      fontFamily: {
        // sans: ['Untitled Sans', ...fontFamily.sans],
        mono: ['MonoLisa', ...fontFamily.mono]
      },
      letterSpacing: {
        tighter: '-0.0325em'
      },
      minHeight: {
        16: '4rem'
      },
      lineHeight: {
        slack: '1.7',
        slacker: '1.75'
      },
      listStyleType: {
        circle: 'circle'
      }
    }
  }
}
