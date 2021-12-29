import { NextSeo } from 'next-seo'
import tinytime from 'tinytime'

// --- Components
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Card from 'components/Card'

// --- Others
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
              url: ogImageUrl('Blog'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading heading="Blog" />
        <div className="space-y-10">
          {allPosts.map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              description={
                <time dateTime={post.date || post.sys.firstPublishedAt}>
                  {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(post.date || post.sys.firstPublishedAt))}
                </time>
              }
              url={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? []

  return {
    props: { allPosts }
  }
}
