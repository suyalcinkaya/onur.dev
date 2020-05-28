import Document, { Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from 'lib/gtag'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link rel="dns-prefetch preconnect" href="https://www.googletagmanager.com" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
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
          <style
            dangerouslySetInnerHTML={{
              __html: `
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
                  src: url('/static/fonts/Gilroy-Bold.woff2') format('woff2'),
                    url('/static/fonts/Gilroy-Bold.woff') format('woff');
                }

                @font-face {
                  font-family: 'Jetbrains Mono';
                  src: url('/static/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
                    url('/static/fonts/JetBrainsMono-Regular.woff') format('woff');
                }
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
