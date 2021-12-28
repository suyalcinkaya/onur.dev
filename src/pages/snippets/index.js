import { NextSeo } from 'next-seo'

// --- Components
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Card from 'components/Card'

// --- Others
import { getAllCodeSnippets } from 'lib/contentful'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/snippets'
const title = 'Snippets — Onur Şuyalçınkaya'

export default function Snippets({ allCodeSnippets }) {
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          images: [
            {
              url: ogImageUrl('Snippets'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading
          heading="Snippets"
          description="These are a collection of code snippets I've used in the past and saved."
        />
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

  return {
    props: { allCodeSnippets }
  }
}
