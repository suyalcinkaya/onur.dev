import { Fragment, Suspense } from 'react'
import NextLink from 'next/link'

import SectionBlock from '@/components/SectionBlock'
import { getAllPosts } from '@/lib/contentful'
import { MIXTAPES, PROFILES } from '@/lib/constants'
import { getDateTimeFormat, dateToISOString } from '@/lib/utils'

export default function Home({ allPosts }) {
  const latestPost = allPosts[0]
  const latestPostDate = latestPost.date || latestPost.firstPublishedAt
  const latestPostString = getDateTimeFormat(latestPostDate)

  return (
    <Suspense fallback={null}>
      <div className="flex flex-col gap-y-4 content">
        <SectionBlock title="Latest" href={`/writing/${latestPost.slug}`}>
          <NextLink href={`/writing/${latestPost.slug}`} className="flex flex-col gap-1">
            <h2>{latestPost.title}</h2>
            <time dateTime={latestPostDate}>{latestPostString}</time>
          </NextLink>
        </SectionBlock>
        <hr />
        <SectionBlock title="Popular Mixtapes" href={PROFILES.soundcloud.url}>
          {MIXTAPES.map((mixtape) => {
            const { title, date, url } = mixtape
            const dateString = dateToISOString(date)

            return (
              <Fragment key={`mixtape_${url}`}>
                <a href={url} target="_blank" className="tabular-nums">
                  <span className="flex items-baseline">
                    <time dateTime={date} className="shrink whitespace-nowrap pr-4">
                      {dateString}
                    </time>
                    <span className="flex items-center underline underline-offset-4">
                      {title}
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </Fragment>
            )
          })}
        </SectionBlock>
        <hr />
        <SectionBlock title="Writing" href="/writing">
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
                    <time dateTime={postDate} className="shrink whitespace-nowrap">
                      {dateString}
                    </time>
                    <span className="underline underline-offset-4">{title}</span>
                  </span>
                </NextLink>
              </Fragment>
            )
          })}
        </SectionBlock>
      </div>
    </Suspense>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? []

  return {
    props: { allPosts, headerTitle: 'Home' }
  }
}
