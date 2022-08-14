import { Suspense } from 'react'

// --- Components
import PageTitle from 'components/PageTitle'
import Card from 'components/Card'
import PageSeo from 'components/PageSeo'
import RichText from 'components/contentful/RichText'

// --- Others
import { getAllPosts, getPage } from 'lib/contentful'
import { getDateTimeFormat } from 'utils/helpers'

export default function Writing({ allPosts, page: { title, content, ...rest } }) {
  return (
    <>
      <PageSeo title={title} {...rest} />
      <PageTitle title={title || 'Writing'} />
      <Suspense fallback={null}>
        <RichText content={content} />
        <div className="flex flex-col gap-y-6">
          {allPosts.map((post) => {
            const {
              title,
              date,
              slug,
              sys: { firstPublishedAt }
            } = post

            const postDate = date || firstPublishedAt
            const dateString = getDateTimeFormat(postDate)

            return (
              <Card
                key={`post_${slug}`}
                title={title}
                subtitle={<time dateTime={postDate}>{dateString}</time>}
                url={`/writing/${slug}`}
              />
            )
          })}
        </div>
      </Suspense>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? []
  const page = (await getPage('blog', preview)) ?? {}

  return {
    props: { allPosts, page, headerTitle: page?.title || 'Writing' }
  }
}
