import { profiles } from 'lib/constants'
import { ogImageUrl } from 'lib/helper'

const title = 'Onur Şuyalçınkaya'
const description = 'Software Engineer, JavaScript enthusiast, Writer, and DJ.'
const twitterUsername = `@${profiles.twitter.username}`

const SEO = {
  title,
  description,
  canonical: 'https://onur.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://onur.dev',
    site_name: 'Onur Şuyalçınkaya',
    title,
    description,
    images: [
      {
        url: ogImageUrl(title),
        alt: title,
        width: 1024,
        height: 1024
      }
    ]
  },
  twitter: {
    handle: twitterUsername,
    site: twitterUsername,
    cardType: 'summary_large_image'
  }
}

export default SEO
