import { MDXProvider } from '@mdx-js/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import { Header, MDXComponents } from 'components'
import prismTheme from 'utils/prism'
import theme from 'utils/theme'

const GlobalStyle = createGlobalStyle`
  ${prismTheme}

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-feature-settings: 'ss01' 1, 'cv05' 1;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.25;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  *, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex: 0 1 auto;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
  }

  article {
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1em;
      margin-top: 2em;
      scroll-margin-top: 100px;
    }

    p {
      line-height: 1.625;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    figure {
      padding: 0;
      margin: 0;
      position: absolute;
      left: 0;
      right: 0;

      img {
        max-height: 600px;
      }
    }

    img, video {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 6px;
    }

    ol, ul {
      margin: 0;
      padding: 0;
    }

    strong {
      font-weight: 600;
    }
  }
`

/* export function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  console.log(metric)
} */

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
