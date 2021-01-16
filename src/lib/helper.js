export const ogImageUrl = (text) => {
  const encodedText = encodeURIComponent(text)
  return `https://og-onurdev.vercel.app/${encodedText}.png?md=1&fontSize=120px&images=https%3A%2F%2Fonur.dev%2Fimages%2Fme.svg`
}

export const getReadingTime = (minutes) => (minutes > 1 ? `${Math.ceil(minutes)} mins read` : `1 min read`)

export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}
