const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      boxShadow: {
        normal: '0 1px 2px rgba(16, 29, 52, .1)'
      },
      colors: {
        charcoal: '#111318',
        inherit: 'inherit',
        primary: {
          default: '#0070F3',
          light: '#D3E5FF'
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['Inter', ...fontFamily.sans]
      },
      fontSize: {
        xxs: '.675rem',
        '3xl': ['1.875rem', '1.25'],
        '4xl': ['2.25rem', '1.25'],
        '5xl': ['3rem', '1.25']
      },
      minHeight: {
        16: '4rem',
        20: '5rem'
      },
      lineHeight: {
        slack: '1.7',
        slacker: '1.75'
      },
      listStyleType: {
        circle: 'circle'
      },
      spacing: {
        '2px': '2px'
      }
    }
  },
  variants: {
    extend: {
      margin: ['last'],
      padding: ['first', 'last']
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
