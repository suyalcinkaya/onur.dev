import { NextSeo } from 'next-seo'

// --- Components
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'
import BlogPost from 'components/WritingCard'

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
            <div key={post.slug}>
              <BlogPost
                title={post.title}
                summary={post.description}
                publishedAt={post.date || post.sys.firstPublishedAt}
                slug={post.slug}
                readingTime={{ minutes: 10 }}
              />
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(undefined, preview)) ?? []
  return {
    props: { allPosts }
  }
}
