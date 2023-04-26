import Analytics from '@/app/analytics'
import { openGraphImage } from '@/app/shared-metadata'
import Header from '@/components/Header'
import PageLayout from '@/layouts/PageLayout'
import { getOgImageUrl } from '@/lib/utils'
import { PROFILES } from '@/lib/constants'
import '@/app/globals.css'

const title = 'Onur Şuyalçınkaya'
const description = 'Software Engineer, JavaScript enthusiast, DJ, and writer.'

export const metadata = {
  metadataBase: new URL('https://onur.dev'),
  robots: {
    index: true,
    follow: true
  },
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        ...openGraphImage,
        url: getOgImageUrl({ title })
      }
    ],
    alt: title,
    type: 'website',
    url: '/',
    siteName: title,
    locale: 'en_IE'
  },
  alternates: {
    canonical: '/'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  manifest: '/site.webmanifest',
  twitter: {
    cardType: 'summary_large_image',
    site: `@${PROFILES.twitter.username}`,
    creator: `@${PROFILES.twitter.username}`
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageLayout>{children}</PageLayout>
        <Analytics />
      </body>
    </html>
  )
}
