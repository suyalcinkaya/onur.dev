import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Header } from 'components'
import theme from 'utils/theme'

const GlobalStyle = createGlobalStyle`
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
    color: ${theme.colors.yemek500};
    text-decoration: none;
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

    ul {
      padding-top: 0.5rem;
      padding-left: 1rem;
      margin-left: 0.5rem;
      margin-bottom: 2rem;
      overflow: scroll;
      word-break: break-all;

      li {
        padding-bottom: 0.25rem;
      } 
    }

    strong {
      font-weight: 600;
    }
  }

  pre {
    background: rgb(247, 250, 252) !important;
    border: 1px solid rgb(226, 232, 240);
    border-radius: 6px;
    border-image: initial;

    padding: 1rem !important;
    min-width: 100%;
    font-size: 0.9rem;
    margin: 1.5rem 0px;
    overflow: auto;
  }

  :not(pre) > code, :not(blockquote) > code {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    font-size: 14px;
    background-color: #edf2f7;
    padding: 0.125rem 0.5rem;
    border-radius: 6px;
  }

  pre, blockquote {
    code {
      color: rgb(26, 32, 44);
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      overflow-wrap: normal;
      tab-size: 4;
      hyphens: none;
      width: 100%;
      background: none;
      font-size: 12px;
      padding: 0;
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
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
