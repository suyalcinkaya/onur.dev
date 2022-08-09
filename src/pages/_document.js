import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <>
        <Head>
          <link rel="icon" sizes="48x48" href="/favicons/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
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
