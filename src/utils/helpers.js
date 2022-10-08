const generateOgImageUrl = (title) => {
  return `https://og-image-onur.vercel.app/${encodeURIComponent(title)}.png?md=0&fontSize=125px`
}
const generateOgImageUrlCache = {}
export const cachedGenerateOgImageUrl = (title) => {
  if (generateOgImageUrlCache[title]) {
    return generateOgImageUrlCache[title]
  }

  return (generateOgImageUrlCache[title] = generateOgImageUrl(title))
}

const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}
const isExternalLinkCache = {}
export const cachedIsExternalLink = (href) => {
  if (isExternalLinkCache[href]) {
    return isExternalLinkCache[href]
  }

  return (isExternalLinkCache[href] = isExternalLink(href))
}

export const fetcher = (url) => fetch(url).then((res) => res.json())

export const getDateTimeFormat = (date) => {
  const dateObj = new Date(date)
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObj)
}

const dasherize = (text) => String(text).replace(/ +/g, '-').toLowerCase()
const dasherizeCache = {}
export const cachedDasherize = (text) => {
  if (dasherizeCache[text]) {
    return dasherizeCache[text]
  }

  return (dasherizeCache[text] = dasherize(text))
}
