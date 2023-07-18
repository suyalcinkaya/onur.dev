import '@/app/globals.css'
import Link from 'next/link'
import { Inter, JetBrains_Mono } from 'next/font/google'

import Analytics from '@/app/analytics'
import { NavigationLink } from '@/app/_components/NavigationLink'
import { SideMenu } from '@/app/_components/SideMenu'
import { PROFILES, LINKS } from '@/lib/constants'
import { title, description } from '@/app/shared-metadata'

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

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interFont.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="lg:flex">
          <SideMenu className="hidden lg:flex">
            <div className="flex w-full flex-col gap-6 text-sm">
              <div className="flex flex-col gap-4">
                <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
                  <img
                    src="/assets/me.jpg"
                    alt="Onur Şuyalçınkaya"
                    width={40}
                    height={40}
                    loading="eager"
                    className="rounded-full border shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">Onur Şuyalçınkaya</span>
                    <span className="text-gray-600">Software Engineer</span>
                  </div>
                </Link>
                <div className="flex flex-col gap-1">
                  {LINKS.map((link) => (
                    <NavigationLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="px-2 text-xs font-medium text-gray-400">Online</span>
                <div className="flex flex-col gap-1">
                  {Object.values(PROFILES).map((profile) => (
                    <NavigationLink key={profile.url} href={profile.url} label={profile.title} icon={profile.icon} />
                  ))}
                </div>
              </div>
            </div>
          </SideMenu>
          <div className="flex flex-1">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

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
  twitter: {
    card: 'summary_large_image',
    site: `@${PROFILES.twitter.username}`,
    creator: `@${PROFILES.twitter.username}`
  },
  other: {
    pinterest: 'nopin'
  }
}
