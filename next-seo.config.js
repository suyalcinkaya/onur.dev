const title = 'Onur Şuyalçınkaya — Engineer, Writer, DJ.'
const description = 'Frontend Engineer, JavaScript enthusiast, and DJ'

const SEO = {
  title,
  description,
  canonical: 'https://onur.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://onur.dev',
    title,
    description,
    images: [
      {
        url: 'https://onur.dev/images/me.png',
        alt: title,
        width: 1024,
        height: 1024
      }
    ]
  },
  twitter: {
    handle: '@onursdev',
    site: '@onursdev',
    cardType: 'summary_large_image'
  }
}

export default SEO
