import '@/app/globals.css'
import { Suspense } from 'react'
import Link from 'next/link'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { SparklesIcon, Edit3Icon, NavigationIcon, UserCircle2Icon } from 'lucide-react'

import Analytics from '@/app/analytics'
import { openGraphImage } from '@/app/shared-metadata'
import Header from '@/app/_components/Header'
import { Footer } from '@/app/_components/Footer'
import PageLayout from '@/app/_components/PageLayout'
import { SideMenu } from '@/app/_components/SideMenu'
import { getAllPosts, getAllLogbook } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { PROFILES } from '@/lib/constants'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['variable']
})

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
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
    <html lang="en" className={`${interFont.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="lg:flex">
          <SideMenu>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex flex-col gap-4">
                <Link href="/" className="p-2">
                  <span className="font-semibold">Onur Şuyalçınkaya</span>
                </Link>
                <div className="flex flex-col gap-1">
                  <Link href="/" className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-200">
                    <SparklesIcon size={16} />
                    <span className="font-medium">Home</span>
                  </Link>
                  <Link href="/writing" className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-200">
                    <Edit3Icon size={16} />
                    <span className="font-medium">Writing</span>
                  </Link>
                  <Link href="/journey" className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-200">
                    <NavigationIcon size={16} />
                    <span className="font-medium">Journey</span>
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-200">
                    <UserCircle2Icon size={16} />
                    <span className="font-medium">About</span>
                  </Link>
                </div>
              </div>
            </div>
          </SideMenu>
          {/* <Suspense fallback={null}>
            <div className="lg:hidden">
              <Header allPosts={allPosts} journeyEntryCount={journeyEntryCount} />
            </div>
          </Suspense> */}
          {children}
        </div>

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
