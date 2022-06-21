export const ogImageUrl = (title) =>
  `https://og-image-onur.vercel.app/${encodeURIComponent(title)}.png?md=0&fontSize=125px`

export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}

export const fetcher = (url) => fetch(url).then((res) => res.json())
