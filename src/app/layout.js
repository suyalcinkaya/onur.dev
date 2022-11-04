import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

// --- Components
import Header from 'components/Header'

// --- Others
import { ContextProvider } from 'providers/ContextProvider'
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

  return (
    <html>
      <head>
        <link rel="icon" sizes="48x48" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
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
