const title = 'Onur Şuyalçınkaya – Developer, writer, DJ.'
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
        url: 'https://onur.dev/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
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
