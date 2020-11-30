import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'

// --- Components
import Header from 'components/Header'
import MDXComponents from 'components/MDXComponents'

// --- Others
import { trackPageview } from 'utils/gtag'
import SEO from '../../next-seo.config'
import theme from 'styles/theme'

import 'styles/fonts.css'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      process.env.NODE_ENV === 'production' && trackPageview(url)
      window.scrollTo(0, 0) // because router.push(...) doesn't scroll to top
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Fragment>
      <Head>
        {/* https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Header />
        <MDXProvider components={MDXComponents}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </MDXProvider>
      </ChakraProvider>
    </Fragment>
  )
}

export default App
