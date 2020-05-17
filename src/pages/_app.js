import { MDXProvider } from '@mdx-js/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'

// --- Components
import { Header, MDXComponents } from 'components'

// --- Others
import SEO from '../../next-seo.config'
import prismTheme from 'utils/prism'
import theme from 'utils/theme'

const GlobalStyle = createGlobalStyle`
  ${prismTheme}

  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/Inter-Regular.woff2') format('woff2'),
      url('/static/fonts/Inter-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/Inter-Medium.woff2') format('woff2'),
      url('/static/fonts/Inter-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/Inter-SemiBold.woff2') format('woff2'),
      url('/static/fonts/Inter-SemiBold.woff') format('woff');
  }

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

  button, [role="button"] {
    cursor: pointer;
  }

  article {
    img, video {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 6px;
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
