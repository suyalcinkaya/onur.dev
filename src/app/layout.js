import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import smoothscroll from 'smoothscroll-polyfill'

// --- Components
import Header from 'components/Header'

// --- Others
import { ContextProvider } from 'providers/ContextProvider'
import { trackPageview } from 'lib/gtag'
import { defaultSEO } from 'utils/seo'

// --- Styles
import 'global.css'

export default function RootLayout({ children }) {
  const router = useRouter()
  const {
    pathname,
    query: { slug }
  } = router
  const isSidebarAvailable = router.pathname !== '/writing/[slug]'
  const Sidebar = dynamic(() => import('components/Sidebar'))

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      process.env.NODE_ENV === 'production' && trackPageview(url)
      window.scrollTo({ top: 0, behavior: 'smooth' }) // because router.push(...) doesn't scroll to top
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <html>
      <head>
        <link rel="icon" sizes="48x48" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
                partytown = {
                  lib: "/_next/static/~partytown/",
                  forward: ["gtag", "dataLayer.push"],
                  debug: ${process.env.NODE_ENV !== 'production'},
                  resolveUrl: function (url, location, type) {
                    if (type === 'script') {
                      const proxyUrl = new URL('https://cdn.builder.codes/api/v1/js-proxy');
                      proxyUrl.searchParams.append('url', url.href);
                      proxyUrl.searchParams.append('apiKey', "${process.env.NEXT_PUBLIC_BUILDER_PUBLIC_API_KEY}");
                      return proxyUrl;
                    }
                    return url;
                  },
                };
              `
          }}
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy="worker"
        />
        <DefaultSeo {...defaultSEO} />
      </head>
      <body>
        <ContextProvider>
          <Header headerTitle="" router={router} />
          {isSidebarAvailable && <Sidebar router={router} />}
        </ContextProvider>
        <main className="flex min-h-screen pb-16 pt-32 overflow-hidden px-safe">
          <div className="px-4 md:px-16 mx-auto w-full max-w-screen-md">
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                key={slug ? `${pathname}/${slug}` : pathname}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="h-full"
                // transition={{ duration: 0.3, ease: [0.175, 0.85, 0.42, 0.96] }}
              >
                <>{children}</>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </body>
    </html>
  )
}
