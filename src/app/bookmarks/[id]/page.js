import { notFound } from 'next/navigation'

import { PageTitle } from '@/app/_components/PageTitle'
import { FloatingHeader } from '@/app/_components/FloatingHeader'
import { BookmarkList } from '@/app/_components/BookmarkList'
import { getCollection, getRaindrops } from '@/lib/raindrop'
import { COLLECTION_IDS } from '@/lib/constants'

export async function generateStaticParams() {
  return COLLECTION_IDS.map((id) => ({ id: String(id) }))
}

async function fetchData(id) {
  const [collection, raindrops] = await Promise.all([getCollection(id), getRaindrops(id)])
  if (!collection) notFound()

  return {
    collection,
    raindrops
  }
}

export default async function CollectionPage({ params }) {
  const { id } = params
  const { collection, raindrops } = await fetchData(id)

  return (
    <div className="relative flex w-full flex-col">
      <FloatingHeader initialTitle={collection.item.title} backLink="/bookmarks" />
      <div className="content-wrapper">
        <div className="content @container">
          <PageTitle title={collection.item.title} />
          <BookmarkList id={id} initialData={raindrops} />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  const { id } = params
  const collection = await getCollection(id)
  if (!collection) return null

  const siteUrl = `/bookmarks/${collection.item._id}`
  const seoTitle = `${collection.item.title} | Bookmarks`
  const seoDescription = `A curated selection of various handpicked ${collection.item.title.toLowerCase()} bookmarks by Onur Şuyalçınkaya`

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
