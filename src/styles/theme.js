import theme from '@chakra-ui/theme'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { MAX_WIDTH } from 'utils/constants'

const breakpoints = createBreakpoints({
  xs: '320px',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
})

const styles = {
  ...theme.styles,
  global: () => ({
    ...theme.styles.global,
    html: {
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      textSizeAdjust: '100%'
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'body',
      fontSize: 17,
      // fontFeatureSettings: `'ss01' 1, 'cv05' 1`,
      lineHeight: 1.7,
      letterSpacing: '-0.01em',
      backgroundColor: theme.colors.white
    },
    'html, body': {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      color: '#333333'
    },
    '*, *::before, &::after': {
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      MsFlex: '0 1 auto',
      overflowWrap: 'break-word',
      borderColor: theme.colors.gray[200]
    },
    '#__next': {
      maxWidth: MAX_WIDTH,
      margin: '0 auto'
    },
    p: {
      lineHeight: 1.75,
      margin: 0
    },
    '@media (hover: hover)': {
      "a[href], input[type='submit'], input[type='image'], label[for], select, button, [role='button']": {
        cursor: 'pointer'
      }
    },
    figure: {
      margin: 0,
      padding: 0
    },
    'figure figcaption': {
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.medium,
      color: theme.colors.gray[600]
    },
    'article img': {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '6px'
    },
    'li p, li h1, li h2': {
      marginTop: 0,
      marginBottom: 0
    }
  })
}

const customTheme = {
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
    link: '#0070F3',
    lightLink: '#D3E5FF'
  },
  fontSizes: {
    ...theme.fontSizes,
    xxs: '0.675rem'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 600,
    bolder: 700
  },
  radii: {
    ...theme.radii,
    normal: 8
  },
  config: {
    ...theme.config,
    useSystemColorMode: false
  },
  styles
}

export default extendTheme(customTheme)
