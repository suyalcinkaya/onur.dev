import { Suspense } from 'react'
import NextLink from 'next/link'

import SectionBlock from '@/components/SectionBlock'
import WritingCard from '@/components/WritingCard'
import Link from '@/components/Link'
import { getAllPosts } from '@/lib/contentful'
import { MIXTAPES, PROFILES } from '@/lib/constants'
import { getDateTimeFormat, dateToISOString } from '@/lib/utils'

export default async function Home() {
  const { allPosts } = await fetchData()
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
              <Link key={`mixtape_${url}`} href={url} className="tabular-nums">
                <span className="flex items-baseline gap-4">
                  <time dateTime={date} className="shrink whitespace-nowrap">
                    {dateString}
                  </time>
                  <span className="underline underline-offset-4">{title}</span>
                </span>
              </Link>
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
        </SectionBlock>
      </div>
    </Suspense>
  )
}

async function fetchData() {
  const allPosts = (await getAllPosts()) ?? []
  return { allPosts, headerTitle: 'Home' }
}
