import { theme as chakraTheme } from '@chakra-ui/core'

// 480px, 640px, 1024px, 1280px
const breakpoints = ['30em', '40em', '64em', '80em']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fonts = {
  sans: `GT America, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  heading: `GT America Extended, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
}

const theme = {
  ...chakraTheme,
  breakpoints,
  colors: {
    ...chakraTheme.colors,
    link: '#0070F3'
  },
  fonts: {
    ...fonts,
    body: fonts.sans,
    heading: fonts.heading,
    code: fonts.mono
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
    xxs: '.675rem'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
    bolder: 700
  },
  radii: {
    ...chakraTheme.radii,
    normal: 8,
    full: 9999
  }
}

export default theme
