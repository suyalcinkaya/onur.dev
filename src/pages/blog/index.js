import { NextSeo } from 'next-seo'
import tinytime from 'tinytime'

// --- Components
import Layout from 'components/Layout'
import PageTitle from 'components/PageTitle'
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
        <PageTitle title="Blog" />
        <div className="space-y-10">
          {allPosts.map((post) => {
            const {
              title,
              // description,
              date,
              slug,
              sys: { firstPublishedAt }
            } = post

            return (
              <Card
                key={`post_${slug}`}
                title={title}
                description={
                  <time dateTime={date || firstPublishedAt}>
                    {tinytime('{MMMM} {DD}, {YYYY}').render(new Date(date || firstPublishedAt))}
                  </time>
                }
                url={`/blog/${slug}`}
              />
            )
          })}
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
