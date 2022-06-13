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
            <link rel="icon" href="/favicons/favicon.ico" sizes="48x48" />
            <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" sizes="180x180" />
            <link rel="manifest" href="/favicons/manifest.webmanifest" />

            <script
              data-partytown-config
              dangerouslySetInnerHTML={{
                __html: `
                partytown = {
                  lib: "/_next/static/~partytown/",
                  forward: ["gtag"]
                };
              `
              }}
            />
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
