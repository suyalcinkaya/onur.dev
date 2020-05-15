import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  render() {
    const { styleTags } = this.props

    return (
      <html>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          />
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

  // Step 2: Retrieve styles from components in the page
  const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))

  // Step 3: Extract the styles as <style> tags
  const styleTags = sheet.getStyleElement()
  return {
    // will be passed to the page component as props
    props: { ...page, styleTags }
  }
}

export default MyDocument
