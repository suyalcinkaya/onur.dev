import { Suspense } from 'react'
import { Inter, JetBrains_Mono } from 'next/font/google'

import Analytics from '@/app/analytics'
import { openGraphImage } from '@/app/shared-metadata'
import Header from '@/app/_components/Header'
import { Footer } from '@/app/_components/Footer'
import PageLayout from '@/app/_components/PageLayout'
import { getAllPosts, getAllLogbook } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { PROFILES } from '@/lib/constants'
import '@/app/globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['variable']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
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
  const { allPosts, journeyEntryCount } = await fetchData()

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Suspense fallback={null}>
          <Header allPosts={allPosts} journeyEntryCount={journeyEntryCount} />
        </Suspense>
        <PageLayout>{children}</PageLayout>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

async function fetchData() {
  // const allPosts = (await getAllPosts()) ?? []
  const [allPosts, journalPosts] = await Promise.all([getAllPosts(), getAllLogbook()])
  return { allPosts, journeyEntryCount: journalPosts.length }
}
