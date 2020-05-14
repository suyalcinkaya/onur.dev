import Head from 'next/head'

import Box from 'components/Box'

const Layout = ({
  children,
  title = 'Onur Şuyalçınkaya',
  description,
  url = 'https://onur.dev',
  type = 'website',
  image = '',
  date,
  ...others
}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {type === 'article' && <meta property="article:published_time" content={date} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@onursdev" />
      <meta name="twitter:creator" content="@onursdev" />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url}></link>
    </Head>
    <section>
      <Box
        as="main"
        mt={{ _: 30, md: 50 }}
        mx="auto"
        maxWidth={700}
        w="100%"
        px="1.5rem"
        {...others}
      >
        {children}
      </Box>
    </section>
  </React.Fragment>
)

export default Layout
