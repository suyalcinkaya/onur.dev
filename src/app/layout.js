import '@/app/globals.css'
import Link from 'next/link'
import { draftMode } from 'next/headers'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { EyeIcon } from 'lucide-react'

import Analytics from '@/app/analytics'
import { NavigationLink } from '@/app/_components/NavigationLink'
import { SideMenu } from '@/app/_components/SideMenu'
import { PROFILES, LINKS } from '@/lib/constants'
import { sharedTitle, sharedDescription } from '@/app/shared-metadata'

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
  const { isEnabled } = draftMode()

  return (
    <html lang="en" className={`${interFont.variable} ${jetbrainsMono.variable}`}>
      <body>
        {isEnabled && (
          <div className="absolute bottom-0 left-0 right-0 z-50 flex h-12 w-full items-center justify-center bg-green-500 text-center text-sm font-medium text-white">
            <div className="flex items-center gap-2">
              <EyeIcon size={16} />
              <span>Draft mode is enabled</span>
            </div>
          </div>
        )}
        <div className="lg:flex">
          <SideMenu className="relative hidden lg:flex">
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
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle
    },
    description: sharedDescription,
    alt: sharedTitle,
    type: 'website',
    url: '/',
    siteName: sharedTitle,
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
