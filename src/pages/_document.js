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
                  forward: ["gtag", "dataLayer"],
                  debug: ${process.env.NODE_ENV !== 'production'},
                  resolveUrl: function (url, location, type) {
                    if (type === 'script') {
                      const proxyUrl = new URL('https://cdn.builder.codes/api/v1/js-proxy');
                      proxyUrl.searchParams.append('url', url.href);
                      proxyUrl.searchParams.append('apiKey', "${process.env.NEXT_PUBLIC_BUILDER_PUBLIC_API_KEY}");
                      return proxyUrl;
                    }
                    return url;
                  },
                };
              `
            }}
          />
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
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
