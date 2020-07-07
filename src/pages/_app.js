import { useEffect } from 'react'
import Router from 'next/router'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Global, css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'

// --- Components
import { Header, MDXComponents } from 'components'

// --- Others
import useColorMode from 'hooks/useColorMode'
import { trackPageview } from 'lib/gtag'
import SEO from '../../next-seo.config'
import theme from 'styles/theme'

const StaticStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Inter';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url('/fonts/inter-regular-webfont.woff2') format('woff2'),
          url('/fonts/inter-regular-webfont.woff') format('woff');
      }

      @font-face {
        font-family: 'Inter';
        font-weight: 500;
        font-style: normal;
        font-display: swap;
        src: url('/fonts/inter-medium-webfont.woff2') format('woff2'),
          url('/fonts/inter-medium-webfont.woff') format('woff');
      }

      @font-face {
        font-family: 'Manrope';
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        src: url('/fonts/manrope-bold-webfont.woff2') format('woff2'),
          url('/fonts/manrope-bold-webfont.woff') format('woff');
      }

      @font-face {
        font-family: 'Jetbrains Mono';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
          url('/fonts/JetBrainsMono-Regular.woff') format('woff');
      }

      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }

      body {
        font-family: ${theme.fonts.sans};
        font-feature-settings: 'ss01' 1, 'cv05' 1;
        text-rendering: optimizeLegibility;
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 1.25;
      }

      *,
      :after,
      :before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -ms-flex: 0 1 auto;
      }

      p {
        line-height: 1.625;
        margin: 0;
      }

      a {
        color: inherit;
        text-decoration: inherit;
        cursor: pointer;
      }

      button,
      [role='button'] {
        cursor: pointer;
      }

      figure {
        margin: 0;
        padding: 0;
      }

      figure figcaption {
        font-size: 0.75rem;
        font-weight: 500;
        margin-top: 0.25rem;
      }

      article img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 6px;
      }
    `}
  />
)

const DynamicStyles = () => {
  const { systemTheme } = useColorMode()

  return (
    <Global
      styles={css`
        body {
          color: ${systemTheme === 'light' ? theme.colors.black : theme.colors.white};
          background-color: ${systemTheme === 'light' ? theme.colors.white : '#1A1A1A'};
        }

        p::selection {
          background: ${systemTheme === 'light' ? '#444444' : theme.colors.gray[100]};
          color: ${systemTheme === 'light' ? theme.colors.white : theme.colors.gray[700]};
        }

        p::-moz-selection {
          background: ${systemTheme === 'light' ? '#444444' : theme.colors.gray[100]};
          color: ${systemTheme === 'light' ? theme.colors.white : theme.colors.gray[700]};
        }

        figure {
          figcaption {
            color: ${systemTheme === 'light' ? theme.colors.gray[400] : theme.colors.gray[400]};
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
    <ThemeProvider theme={theme}>
      <CSSReset />
      <DefaultSeo {...SEO} />
      <StaticStyles />
      <DynamicStyles />
      <Header />
      <MDXProvider components={MDXComponents}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
