import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'

// --- Components
import { Header, MDXComponents } from 'components'

// --- Others
import { trackPageview } from 'utils/gtag'
import SEO from '../../next-seo.config'
import theme from 'styles/theme'

import 'styles/global.css'

function App({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      process.env.NODE_ENV === 'production' && trackPageview(url)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        {/* https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Header />
        <MDXProvider components={MDXComponents}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MDXProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
