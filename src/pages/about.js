// --- Components
import Layout from 'components/Layout'
import PageSeo from 'components/PageSeo'
import PageTitle from 'components/PageTitle'
import RichText from 'components/RichText'

// --- Others
import { getPageDetails } from 'lib/contentful'

export default function About({ pageDetails }) {
  const { content, title, ...rest } = pageDetails

  return (
    <>
      <PageSeo title={title} {...rest} />
      <Layout>
        <PageTitle title={title || 'About Me'} description={<RichText content={content} />} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const pageDetails = (await getPageDetails('about', preview)) ?? {}

  return {
    props: { pageDetails }
  }
}
