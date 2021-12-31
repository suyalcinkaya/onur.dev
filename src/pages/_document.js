import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from 'lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <>
          <Head>
            {/* Base */}
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            {/* PWA & Favicon */}
            <meta name="application-name" content="onur.dev" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="onur.dev" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1A1A1A" />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />

            <link
              rel="preload"
              href="/fonts/UntitledSansWeb-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/UntitledSansWeb-Medium.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />

            {/* Analytics */}
            {process.env.NODE_ENV === 'production' && (
              <>
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `
                  }}
                />
              </>
            )}
          </Head>
        </>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
