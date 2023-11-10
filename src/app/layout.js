import '@/globals.css'
import { draftMode } from 'next/headers'
import Script from 'next/script'
import { GeistSans } from 'geist/font'
import { JetBrains_Mono } from 'next/font/google'
import { EyeIcon } from 'lucide-react'

import { SideMenu } from '@/components/side-menu'
import { MenuContent } from '@/components/menu-content'
import { PROFILES } from '@/lib/constants'
import { sharedTitle, sharedDescription } from '@/app/shared-metadata'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['variable']
})

export default async function RootLayout({ children }) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en" className={`${GeistSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <main vaul-drawer-wrapper="" className="min-h-screen bg-white">
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
              <MenuContent />
            </SideMenu>
            <div className="flex flex-1">{children}</div>
          </div>
        </main>
        <Script
          src="https://unpkg.com/@tinybirdco/flock.js"
          data-host="https://api.tinybird.co"
          data-token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}
        />
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
  twitter: {
    card: 'summary_large_image',
    site: `@${PROFILES.twitter.username}`,
    creator: `@${PROFILES.twitter.username}`
  },
  other: {
    pinterest: 'nopin'
  }
}

export const viewport = {
  themeColor: 'white',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}
