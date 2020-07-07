import { theme as chakraTheme } from '@chakra-ui/core'

const breakpoints = ['23em', '40em', '52em', '64em', '76em']
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

const fonts = {
  sans: `Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
}

const theme = {
  ...chakraTheme,
  breakpoints: breakpoints,
  fonts: {
    ...fonts,
    body: fonts.sans,
    heading: fonts.sans,
    code: fonts.mono
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
