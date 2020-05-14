const space = []

const colors = {
  // scheme colors
  white: '#FFFFFF',
  black: '#484848',
  inherit: 'inherit',

  // ColorHexValue colors
  greenLight: '#1DB954',
  orange: '#ff8c5f',

  yemek100: '#F9E9EE',
  yemek200: '#EFC7D4',
  yemek300: '#E6A5BB',
  yemek400: '#D36287',
  yemek500: '#C01F54',
  yemek600: '#AD1C4C',
  yemek700: '#731332',
  yemek800: '#560E26',
  yemek900: '#3A0919',

  gray100: '#f7fafc',
  gray200: '#edf2f7',
  gray300: '#e2e8f0',
  gray400: '#cbd5e0',
  gray500: '#a0aec0',
  gray600: '#718096',
  gray700: '#4a5568',
  gray800: '#2d3748',
  gray900: '#1a202c'
}

const breakpoints = ['40em', '52em', '64em', '76em']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const radii = {
  normal: 6,
  full: 9999
}

const fontSizes = []

export default {
  breakpoints,
  fontSizes,
  space,
  radii,
  colors
}
