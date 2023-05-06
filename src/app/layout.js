import { Suspense } from 'react'
import { JetBrains_Mono } from 'next/font/google'

import Analytics from '@/app/analytics'
import { openGraphImage } from '@/app/shared-metadata'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import PageLayout from '@/layouts/PageLayout'
import { getAllPosts } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { PROFILES } from '@/lib/constants'
import '@/app/globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['variable']
})
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
    card: 'summary_large_image',
    site: `@${PROFILES.twitter.username}`,
    creator: `@${PROFILES.twitter.username}`
  }
}

export default async function RootLayout({ children }) {
  const allPosts = await fetchData()

  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <Suspense fallback={null}>
          <Header allPosts={allPosts} />
        </Suspense>
        <PageLayout>{children}</PageLayout>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

async function fetchData() {
  const allPosts = (await getAllPosts()) ?? []
  return allPosts
}
