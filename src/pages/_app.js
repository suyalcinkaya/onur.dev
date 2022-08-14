import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import smoothscroll from 'smoothscroll-polyfill'

// --- Components
import Header from 'components/Header'
import PageLayout from 'layouts/PageLayout'

// --- Others
import { ContextProvider } from 'providers/ContextProvider'
import { trackPageview } from 'lib/gtag'
import { defaultSEO } from 'utils/seo'

// --- Styles
import 'styles/global.css'

function App({ Component, pageProps }) {
  const { headerTitle, ...rest } = pageProps
  const router = useRouter()
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
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy="worker"
      />
      <DefaultSeo {...defaultSEO} />
      <ContextProvider>
        <Header headerTitle={headerTitle} router={router} />
        {isSidebarAvailable && <Sidebar router={router} />}
      </ContextProvider>
      <PageLayout router={router}>
        <Component {...rest} />
      </PageLayout>
    </>
  )
}

export default App
