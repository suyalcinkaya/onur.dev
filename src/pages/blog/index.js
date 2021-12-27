import { NextSeo } from 'next-seo'

// --- Components
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Card from 'components/Card'

// --- Other
import { getAllPosts } from 'lib/contentful'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/blog'
const title = 'Blog — Onur Şuyalçınkaya'

export default function Blog({ allPosts }) {
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
              url: ogImageUrl('**Blog**'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading heading="Blog" />
        <div className="space-y-10">
          {allPosts.map((post) => (
            <Card key={post.slug} title={post.title} description={post.description} url={`/blog/${post.slug}`} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(null, preview)) ?? []
  return {
    props: { allPosts }
  }
}
