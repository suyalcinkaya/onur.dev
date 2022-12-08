import { Suspense } from 'react'

import PageTitle from '@/components/PageTitle'
import WritingCard from '@/components/WritingCard'
import PageSeo from '@/components/PageSeo'
import RichText from '@/components/contentful/RichText'
import { getAllPosts, getPage } from '@/lib/contentful'
import { dateToISOString } from '@/lib/utils'

export default function Writing({ allPosts, page: { title = 'Writing', content, ...rest } }) {
  return (
    <>
      <PageSeo title={title} {...rest} />
      <div className="content">
        <PageTitle title={title} />
        <Suspense fallback={null}>
          <RichText content={content} />
          <div className="flex flex-col gap-2">
            {allPosts.map((post) => {
              const {
                title,
                date,
                slug,
                sys: { firstPublishedAt }
              } = post

              const dateTime = date || firstPublishedAt
              const dateString = dateToISOString(dateTime)

              return (
                <WritingCard
                  key={`writing_${slug}`}
                  slug={slug}
                  title={title}
                  dateTime={dateTime}
                  dateString={dateString}
                />
              )
            })}
          </div>
        </Suspense>
      </div>
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
