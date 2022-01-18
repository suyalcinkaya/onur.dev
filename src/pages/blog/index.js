import tinytime from 'tinytime'

// --- Layouts
import PageLayout from 'layouts/PageLayout'

// --- Components
import PageTitle from 'components/PageTitle'
import Card from 'components/Card'
import PageSeo from 'components/PageSeo'
import RichText from 'components/RichText'

// --- Others
import { getAllPosts, getPage } from 'lib/contentful'

export default function Blog({ allPosts, page }) {
  const { title, content, ...rest } = page

  return (
    <>
      <PageSeo title={title} {...rest} />
      <PageLayout>
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
      </PageLayout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? []
  const page = (await getPage('blog', preview)) ?? {}

  return {
    props: { allPosts, page }
  }
}
