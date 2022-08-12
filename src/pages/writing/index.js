import { Suspense } from 'react'

// --- Components
import PageTitle from 'components/PageTitle'
import Card from 'components/Card'
import PageSeo from 'components/PageSeo'
import RichText from 'components/RichText'

// --- Others
import { useHasMounted } from 'hooks/useHasMounted'
import { getAllPosts, getPage } from 'lib/contentful'
import { getDateString } from 'lib/helper'

export default function Writing({ allPosts, page: { title, content, ...rest } }) {
  const hasMounted = useHasMounted()

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
            const dateString = getDateString(postDate)

            return (
              <Card
                key={`post_${slug}`}
                title={title}
                subtitle={hasMounted ? <time dateTime={postDate}>{dateString}</time> : '—'}
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
