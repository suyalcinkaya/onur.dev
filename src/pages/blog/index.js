import tinytime from 'tinytime'

// --- Components
import Layout from 'components/Layout'
import PageTitle from 'components/PageTitle'
import Card from 'components/Card'
import PageSeo from 'components/PageSeo'
import RichText from 'components/RichText'

// --- Others
import { getAllPosts, getPageDetails } from 'lib/contentful'

export default function Blog({ allPosts, pageDetails }) {
  const { title, content, ...rest } = pageDetails

  return (
    <>
      <PageSeo title={title} {...rest} />
      <Layout>
        <PageTitle title={title || 'Blog'} description={<RichText content={content} />} />
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
  const pageDetails = (await getPageDetails('blog', preview)) ?? {}

  return {
    props: { allPosts, pageDetails }
  }
}
