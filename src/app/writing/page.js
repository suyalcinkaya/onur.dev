import { Suspense } from 'react'

import PageTitle from '@/components/PageTitle'
import WritingCard from '@/components/WritingCard'
import { getAllPosts, getPageSeo } from '@/lib/contentful'
import { dateToISOString, getOgImageUrl } from '@/lib/utils'
import { sharedOpenGraphImage } from '@/app/shared-metadata'

export async function generateMetadata() {
  const seoData = (await getPageSeo('writing')) ?? null
  if (!seoData) return null

  const { title, url, seoTitle, seoDescription } = seoData
  const siteUrl = `/${url}`

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          ...sharedOpenGraphImage,
          url: getOgImageUrl({ title, url }),
          alt: title
        }
      ],
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}

async function fetchData() {
  const allPosts = (await getAllPosts()) ?? []
  return { allPosts, headerTitle: 'Writing' }
}

export default async function Writing() {
  const { allPosts } = await fetchData()

  return (
    <div className="content">
      <PageTitle title="Writing" />
      <Suspense fallback={null}>
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
  )
}
