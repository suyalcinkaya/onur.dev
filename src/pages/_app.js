import { useEffect } from 'react'
import Router from 'next/router'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

// --- Components
import { Header, MDXComponents } from 'components'

// --- Others
import { ColorProvider } from 'contexts/ColorProvider'
import useColorMode from 'hooks/useColorMode'
import { trackPageview } from 'lib/gtag'
import SEO from '../../next-seo.config'
import { baseTheme, lightTheme, darkTheme } from 'utils/prism'
import theme from 'utils/theme'

const FontStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Inter';
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
        src: url('/static/fonts/Inter-Regular.woff2') format('woff2'),
          url('/static/fonts/Inter-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Inter';
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
        src: url('/static/fonts/Inter-Medium.woff2') format('woff2'),
          url('/static/fonts/Inter-Medium.woff') format('woff');
      }

      @font-face {
        font-family: 'Inter';
        font-weight: 600;
        font-style: normal;
        font-display: fallback;
        src: url('/static/fonts/Inter-SemiBold.woff2') format('woff2'),
          url('/static/fonts/Inter-SemiBold.woff') format('woff');
      }

      @font-face {
        font-family: 'Gilroy';
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
        src: url('/static/fonts/Gilroy-Medium.woff2') format('woff2'),
          url('/static/fonts/Gilroy-Medium.woff') format('woff');
      }

      @font-face {
        font-family: 'Gilroy';
        font-weight: 600;
        font-style: normal;
        font-display: fallback;
        src: url('/static/fonts/Gilroy-Bold.woff2') format('woff2'),
          url('/static/fonts/Gilroy-Bold.woff') format('woff');
      }
    `}
  />
)

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={css`
        ${baseTheme}
        ${colorMode === 'light' ? lightTheme : darkTheme}

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
          color: ${colorMode === 'light' ? theme.colors.black : theme.colors.gray300};
          background-color: ${colorMode === 'light' ? theme.colors.white : '#171923'};
        }

        *,
        :after,
        :before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          -ms-flex: 0 1 auto;
        }

        p::-moz-selection {
          background: #444444;
          color: #fff;
        }

        p::selection {
          background: #444444;
          color: #fff;
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

          figcaption {
            font-size: 0.75rem;
            font-weight: 500;
            color: ${colorMode === 'light' ? theme.colors.gray600 : theme.colors.gray500};
            margin-top: 0.25rem;
          }
        }

        article {
          img,
          video {
            max-width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 6px;
          }
        }
      `}
    />
  )
}

function App({ Component, pageProps }) {
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
          <FontStyles />
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </ColorProvider>
  )
}

export default App
