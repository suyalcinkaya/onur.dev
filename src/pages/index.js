import Layout from 'components/Layout'

const Home = ({ posts, title, description, ...props }) => (
  <Layout title={`${title} – Developer, writer, creator.`} description={description}>
    <h1>Blog</h1>
    <p>
      This is a simple blog built with Next, easily deployable on{' '}
      <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
    </p>
  </Layout>
)

export async function getStaticProps() {
  const configData = await import('../../siteconfig.json')

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  }
}

export default Home
