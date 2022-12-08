export const getOgImageUrl = ({ title, url }) => {
  let ogImageUrl = `${process.env.SITE_URL ? 'https://' + process.env.SITE_URL : ''}/api/og?title=${encodeURIComponent(
    title
  )}`
  if (url) ogImageUrl += `&url=${url}`
  return ogImageUrl
}

export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}

export async function fetcher(input, init) {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error)
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export const dateToISOString = (date) => {
  const dateObj = new Date(date)
  return dateObj.toISOString().split('T')[0]
}

export const getDateTimeFormat = (date) => {
  const dateObj = new Date(date)
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(dateObj)
}

export const dasherize = (text) => String(text).replace(/ +/g, '-').toLowerCase()
