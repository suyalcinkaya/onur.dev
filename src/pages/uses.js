// --- Components
import Layout from 'components/Layout'
import PageTitle from 'components/PageTitle'
import PageSeo from 'components/PageSeo'
import RichText from 'components/RichText'

// --- Others
import { getPageDetails } from 'lib/contentful'

export default function Uses({ pageDetails }) {
  const { title, content, ...rest } = pageDetails

  return (
    <>
      <PageSeo title={title} {...rest} />
      <Layout>
        <PageTitle title={title || 'Uses'} />
        <RichText content={content} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const pageDetails = (await getPageDetails('uses', preview)) ?? {}

  return {
    props: { pageDetails }
  }
}
