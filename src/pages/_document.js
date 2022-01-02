import Document, { Html, Head, Main, NextScript } from 'next/document'

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

            <link rel="icon" href="/favicons/favicon.ico" sizes="48x48" />
            <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" sizes="180x180" />
            <link rel="manifest" href="/favicons/manifest.webmanifest" />

            {/* Analytics */}
            {process.env.NODE_ENV === 'production' && (
              <>
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <script defer src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GA_TRACKING_ID}');
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
