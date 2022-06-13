import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import smoothscroll from 'smoothscroll-polyfill'

// --- Components
import Header from 'components/Header'
import PageLayout from 'layouts/PageLayout'

// --- Others
import { HeaderTitleProvider } from 'providers/HeaderTitleProvider'
import { trackPageview } from 'lib/gtag'
import SEO from '../../next-seo.config'

// --- Styles
import 'styles/global.css'

function App({ Component, pageProps }) {
  const nextRouter = useRouter()

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
      {/* Google Analytics with Partytown (Web Worker) */}
      <Script strategy="worker" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <DefaultSeo {...SEO} />
      <HeaderTitleProvider>
        <Header />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </HeaderTitleProvider>
    </>
  )
}

export default App
