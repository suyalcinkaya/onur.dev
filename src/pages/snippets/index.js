// --- Components
import Layout from 'components/Layout'
import PageTitle from 'components/PageTitle'
import Card from 'components/Card'
import PageSeo from 'components/PageSeo'
import RichText from 'components/RichText'

// --- Others
import { getAllCodeSnippets, getPageSeo } from 'lib/contentful'

export default function Snippets({ allCodeSnippets, pageSeo }) {
  const { title, content, ...rest } = pageSeo

  return (
    <>
      <PageSeo title={title} {...rest} />
      <Layout>
        <PageTitle title={title || 'Snippets'} description={<RichText content={content} />} />
        <div className="space-y-8">
          {allCodeSnippets.map((codeSnippet) => (
            <Card
              key={codeSnippet.slug}
              title={codeSnippet.title}
              description={codeSnippet.description}
              url={`/snippets/${codeSnippet.slug}`}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allCodeSnippets = (await getAllCodeSnippets(preview)) ?? []
  const pageSeo = (await getPageSeo('snippets', preview)) ?? {}

  return {
    props: { allCodeSnippets, pageSeo }
  }
}
