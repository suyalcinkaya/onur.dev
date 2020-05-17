import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  render() {
    const { styleTags } = this.props

    return (
      <html>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
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

  return {
    props: { ...page, styleTags }
  }
}

export default MyDocument
