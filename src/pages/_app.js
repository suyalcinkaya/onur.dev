import { useEffect } from 'react'
import Head from 'next/head'
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
      <Head>
        {/* https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
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
