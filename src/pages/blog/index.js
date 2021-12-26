import { NextSeo } from 'next-seo'

// --- Components
import WritingCard from 'components/WritingCard'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { getAllFilesFrontMatter } from 'lib/mdx'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/writing'
const title = 'Writing — Onur Şuyalçınkaya'

export default function Writings({ posts }) {
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
              url: ogImageUrl('**Writing**'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading
          heading="Writing"
          description="I've been writing online since 2018, mostly about code, design, and my notions to learn, not to teach."
        />
        <div className="space-y-10">
          {posts.map((frontMatter) => (
            <div key={frontMatter.title}>
              <WritingCard {...frontMatter} />
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getAllFilesFrontMatter('writing')
  const posts = data.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return { props: { posts } }
}
