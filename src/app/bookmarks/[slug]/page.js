import { notFound } from 'next/navigation'

import { PageTitle } from '@/components/page-title'
import { FloatingHeader } from '@/components/floating-header'
import { BookmarkList } from '@/components/bookmark-list.jsx'
import { getCollection, getRaindrops, getCollections } from '@/lib/raindrop'
import { COLLECTION_IDS } from '@/lib/constants'

export async function generateStaticParams() {
  const collections = await getCollections()
  const filteredCollections = collections.items.filter((collection) => COLLECTION_IDS.includes(collection._id))
  return filteredCollections.map((collection) => ({ slug: collection.slug }))
}

async function fetchData(slug) {
  const collections = await getCollections()
  const currentCollection = collections.items
    .filter((collection) => COLLECTION_IDS.includes(collection._id))
    .find((collection) => collection.slug === slug)

  const collection = await getCollection(currentCollection._id)
  if (!collection) notFound()
  const raindrops = await getRaindrops(currentCollection._id)

  return {
    collection: collection.item,
    raindrops
  }
}

export default async function CollectionPage({ params }) {
  const { slug } = params
  const { collection, raindrops } = await fetchData(slug)

  return (
    <div className="relative flex w-full flex-col">
      <FloatingHeader initialTitle={collection.title} backLink="/bookmarks" />
      <div className="content-wrapper">
        <div className="content @container">
          <PageTitle title={collection.title} />
          <BookmarkList id={collection._id} initialData={raindrops} />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const collections = await getCollections()
  const collection = collections.items
    .filter((collection) => COLLECTION_IDS.includes(collection._id))
    .find((collection) => collection.slug === slug)
  if (!collection) return null

  const siteUrl = `/bookmarks/${collection._id}`
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
