import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { ScrollArea } from '@/components/scroll-area'
import { PageTitle } from '@/components/page-title'
import { FloatingHeader } from '@/components/floating-header'
import { LoadingSpinner } from '@/components/loading-spinner'
import { BookmarkList } from '@/components/bookmark-list.jsx'
import { getCollection, getRaindrops, getCollections } from '@/lib/raindrop'
import { sortByProperty } from '@/lib/utils'

export async function generateStaticParams() {
  const collections = await getCollections()
  return collections.map((collection) => ({ slug: collection.slug }))
}

async function fetchData(slug) {
  const collections = await getCollections()
  const sortedCollections = sortByProperty(collections, 'title')
  const currentCollection = collections.find((collection) => collection.slug === slug)
  if (!currentCollection) notFound()

  const collection = await getCollection(currentCollection._id)
  if (!collection) notFound()
  const raindrops = await getRaindrops(currentCollection._id)

  return {
    sortedCollections,
    collection: collection.item,
    raindrops
  }
}

export default async function CollectionPage({ params }) {
  const { slug } = params
  const { sortedCollections, collection, raindrops } = await fetchData(slug)

  return (
    <ScrollArea className="bg-grid flex flex-col" hasScrollTitle>
      <FloatingHeader
        scrollTitle={collection.title}
        goBackLink="/bookmarks"
        bookmarkCollections={sortedCollections}
        currentBookmarkCollection={collection}
      />
      <div className="content-wrapper">
        <div className="content @container">
          <PageTitle title={collection.title} />
          <Suspense fallback={<LoadingSpinner />}>
            <BookmarkList id={collection._id} initialData={raindrops} />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const collections = await getCollections()
  const collection = collections.find((collection) => collection.slug === slug)
  if (!collection) return null

  const siteUrl = `/bookmarks/${collection.slug}`
  const seoTitle = `${collection.title} | Bookmarks`
  const seoDescription = `A curated selection of various handpicked ${collection.title.toLowerCase()} bookmarks by Onur Şuyalçınkaya`

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
