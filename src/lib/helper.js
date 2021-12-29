export const ogImageUrl = (title) =>
  `https://og-image-onur.vercel.app/${encodeURIComponent(title)}.png?md=0&fontSize=125px`

export const getReadingTime = (minutes) => (minutes > 1 ? `${Math.ceil(minutes)} mins read` : `1 min read`)

export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}
