import Analytics from '@/app/analytics'
import Header from '@/components/Header'
import PageLayout from '@/layouts/PageLayout'
import { getOgImageUrl } from '@/lib/utils'
import { PROFILES } from '@/lib/constants'
import { sharedOpenGraphImage } from '@/app/shared-metadata'
import '@/styles/global.css'

const title = 'Onur Şuyalçınkaya'
const description = 'Software Engineer, JavaScript enthusiast, DJ, and writer.'
const url = 'https://onur.dev'

export const metadata = {
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
        ...sharedOpenGraphImage,
        url: getOgImageUrl({ title })
      }
    ],
    alt: title,
    type: 'website',
    url,
    siteName: title,
    locale: 'en_IE'
  },
  alternates: {
    canonical: url
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

export default function RootLayout({ headerTitle, children }) {
  return (
    <html lang="en">
      <body>
        <Header headerTitle={headerTitle} />
        <main className="flex min-h-screen py-32 overflow-hidden px-safe">
          <PageLayout>
            <>{children}</>
          </PageLayout>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
