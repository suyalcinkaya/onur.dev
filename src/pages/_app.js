import { useEffect } from 'react'
import Router from 'next/router'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'

// --- Components
import { Header, MDXComponents } from 'components'

// --- Others
import { ColorProvider } from 'contexts/ColorProvider'
import useColorMode from 'hooks/useColorMode'
import { trackPageview } from 'lib/gtag'
import SEO from '../../next-seo.config'
import theme from 'styles/theme'

const DynamicStyles = () => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={css`
        body {
          color: ${colorMode === 'light' ? theme.colors.black : theme.colors.gray300};
          background-color: ${colorMode === 'light' ? theme.colors.white : '#171923'};
        }

        p::selection {
          background: ${colorMode === 'light' ? '#444444' : theme.colors.white};
          color: ${colorMode === 'light' ? theme.colors.white : theme.colors.gray200};
        }

        p::-moz-selection {
          background: ${colorMode === 'light' ? '#444444' : theme.colors.white};
          color: ${colorMode === 'light' ? theme.colors.white : theme.colors.gray200};
        }

        figure {
          figcaption {
            color: ${colorMode === 'light' ? theme.colors.gray600 : theme.colors.gray500};
          }
        }
      `}
    />
  )
}

function App({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <ColorProvider>
      <ThemeProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <DynamicStyles />
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MDXProvider>
      </ThemeProvider>
    </ColorProvider>
  )
}

export default App
