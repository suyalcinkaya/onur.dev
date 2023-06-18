import '@/app/globals.css'
import { Suspense } from 'react'
import Link from 'next/link'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { SparklesIcon, Edit3Icon, NavigationIcon, UserCircle2Icon } from 'lucide-react'

import Analytics from '@/app/analytics'
import { openGraphImage } from '@/app/shared-metadata'
import { NavigationLink } from '@/app/_components/NavigationLink'
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
  },
  other: {
    pinterest: 'nopin'
  }
}

const links = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: <Edit3Icon size={16} />
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/about',
    label: 'About',
    icon: <UserCircle2Icon size={16} />
  }
]

export default async function RootLayout({ children }) {
  const { allPosts, journeyEntryCount } = await fetchData()

  return (
    <html lang="en" className={`${interFont.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="lg:flex">
          <SideMenu className="hidden lg:flex">
            <div className="flex w-full flex-col gap-1 text-sm">
              <div className="flex flex-col gap-4">
                <Link href="/" className="p-2">
                  <span className="font-semibold">Onur Şuyalçınkaya</span>
                </Link>
                <div className="flex flex-col gap-1">
                  {links.map((link) => (
                    <NavigationLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
                  ))}
                </div>
              </div>
            </div>
          </SideMenu>
          {/* <Suspense fallback={null}>
            <div className="lg:hidden">
              <Header allPosts={allPosts} journeyEntryCount={journeyEntryCount} />
            </div>
          </Suspense> */}
          <div className="flex flex-1">{children}</div>
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
