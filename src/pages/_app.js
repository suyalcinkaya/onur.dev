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
import SEO from '../../next-seo.config'

// --- Styles
import 'styles/global.css'

function App({ Component, pageProps }) {
  const { headerTitle, ...rest } = pageProps
  const nextRouter = useRouter()
  const isSidebarAvailable = nextRouter.pathname !== '/writing/[slug]'
  const Sidebar = dynamic(() => import('components/Sidebar'))

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      process.env.NODE_ENV === 'production' && trackPageview(url)
      window.scrollTo({ top: 0, behavior: 'smooth' }) // because nextRouter.push(...) doesn't scroll to top
    }
    nextRouter.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [nextRouter.events])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy="worker"
      />
      <DefaultSeo {...SEO} />
      <ContextProvider>
        <Header headerTitle={headerTitle} router={nextRouter} />
        {isSidebarAvailable && <Sidebar router={nextRouter} />}
      </ContextProvider>
      <PageLayout>
        <Component {...rest} />
      </PageLayout>
    </>
  )
}

export default App
