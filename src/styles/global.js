import css from 'styled-jsx/css'

import theme from 'styles/theme'

export default css.global`
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
    src: url('/static/fonts/Inter-Medium.woff2') format('woff2'), url('/static/fonts/Inter-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/Inter-SemiBold.woff2') format('woff2'),
      url('/static/fonts/Inter-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/Gilroy-Medium.woff2') format('woff2'),
      url('/static/fonts/Gilroy-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Gilroy';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/Gilroy-Bold.woff2') format('woff2'), url('/static/fonts/Gilroy-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Jetbrains Mono';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('/static/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
      url('/static/fonts/JetBrainsMono-Regular.woff') format('woff');
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
`
