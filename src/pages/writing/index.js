import { Suspense } from 'react'

import PageTitle from '@/components/PageTitle'
import Card from '@/components/Card'
import PageSeo from '@/components/PageSeo'
import RichText from '@/components/contentful/RichText'
import { getAllPosts, getPage } from '@/lib/contentful'
import { getDateTimeFormat } from '@/lib/utils'

export default function Writing({ allPosts, page: { title = 'Writing', content, ...rest } }) {
  return (
    <>
      <PageSeo title={title} {...rest} />
      <PageTitle title={title} />
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
  const page = (await getPage('writing', preview)) ?? {}

  return {
    props: { allPosts, page, headerTitle: page?.title || 'Writing' }
  }
}
