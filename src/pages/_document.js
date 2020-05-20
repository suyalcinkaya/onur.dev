import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { GA_TRACKING_ID } from 'lib/gtag'

class MyDocument extends Document {
  render() {
    const { styleTags, isProduction } = this.props

    return (
      <html>
        <Head>
          {isProduction && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
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
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export async function getServerSideProps(context) {
  const sheet = new ServerStyleSheet()
  const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
  const styleTags = sheet.getStyleElement()

  const isProduction = process.env.NODE_ENV === 'production'

  return {
    props: { ...page, styleTags, isProduction }
  }
}

export default MyDocument
