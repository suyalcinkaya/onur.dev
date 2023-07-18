export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}

// June 23, 1992
export const getDateTimeFormat = (date) => {
  const dateObj = new Date(date)
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(dateObj)
}

export const dasherize = (text) => String(text).replace(/ +/g, '-').toLowerCase()

export const getMediumFont = async () => {
  const response = await fetch(new URL('@/assets/SpaceGrotesk-Medium.ttf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
}

export const getBoldFont = async () => {
  const response = await fetch(new URL('@/assets/SpaceGrotesk-SemiBold.ttf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
}
