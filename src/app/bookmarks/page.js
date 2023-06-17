import { Suspense } from 'react'

import PageTitle from '@/app/_components/PageTitle'
import { getPageSeo } from '@/lib/contentful'
import { fetchRaindropBookmarks } from '@/lib/raindrop'
import { getOgImageUrl } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

export async function generateMetadata() {
  const seoData = (await getPageSeo('bookmarks')) ?? null
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
          ...openGraphImage,
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
  const [raindropBookmarks] = await Promise.all([fetchRaindropBookmarks()])
  return { raindropBookmarks }
}

export default async function Writing() {
  const { raindropBookmarks } = await fetchData()

  console.log('raindropBookmarks', raindropBookmarks)

  return (
    <div className="content">
      <PageTitle title="Bookmarks" />
      <Suspense fallback={null}>
        <pre>
          {JSON.stringify(
            raindropBookmarks.items.map((bookmark) => {
              return {
                title: bookmark.title,
                url: bookmark.link,
                description: bookmark.excerpt,
                image: bookmark.cover,
                tags: bookmark.tags,
                createdAt: bookmark.created,
                updatedAt: bookmark.updated
              }
            }),
            null,
            2
          )}
        </pre>
      </Suspense>
    </div>
  )
}
