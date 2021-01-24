import { NextSeo } from 'next-seo'

// --- Components
import SnippetCard from 'components/SnippetCard'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { getAllFilesFrontMatter } from 'lib/mdx'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/snippets'
const title = 'Snippets — Onur Şuyalçınkaya'

export default function Snippets({ snippets }) {
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
              url: ogImageUrl('**Snippets**'),
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
          {snippets.map((frontMatter) => (
            <div key={frontMatter.title}>
              <SnippetCard {...frontMatter} />
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter('snippets')
  const snippets = data.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return { props: { snippets } }
}
