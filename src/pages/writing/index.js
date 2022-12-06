import { Fragment, Suspense } from 'react'
import NextLink from 'next/link'

import PageTitle from '@/components/PageTitle'
import Card from '@/components/Card'
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

              const postDate = date || firstPublishedAt
              const dateString = dateToISOString(postDate)

              return (
                <Fragment key={`post_${slug}`}>
                  <NextLink href={`/writing/${slug}`} className="tabular-nums">
                    <span className="flex items-baseline gap-4">
                      <span className="shrink whitespace-nowrap text-gray-400">{dateString}</span>
                      <span className="underline underline-offset-4">{title}</span>
                    </span>
                  </NextLink>
                </Fragment>
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
