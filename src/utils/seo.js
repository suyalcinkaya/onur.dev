import { profiles } from 'utils/data'
import { getOgImageUrl } from 'utils/helpers'

const title = 'Onur Şuyalçınkaya'
const description = 'Software Engineer, JavaScript enthusiast, DJ, and writer.'
const url = 'https://onur.dev'
const twitterUsername = `@${profiles.twitter.username}`

export const defaultSEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    url,
    title,
    description,
    type: 'website',
    locale: 'en_IE',
    images: [
      {
        url: getOgImageUrl({ title }),
        alt: title,
        width: 1200,
        height: 630,
        type: 'image/png'
      }
    ],
    site_name: title
  },
  twitter: {
    handle: twitterUsername,
    site: twitterUsername,
    cardType: 'summary_large_image'
  }
}
