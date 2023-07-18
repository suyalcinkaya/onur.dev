import { notFound } from 'next/navigation'

import { PageTitle } from '@/app/_components/PageTitle'
import { FloatingHeader } from '@/app/_components/FloatingHeader'
import { BookmarkList } from '@/app/_components/BookmarkList'
import { getCollection } from '@/lib/raindrop'
import { COLLECTIONS } from '@/lib/constants'

export const revalidate = 60 * 60 * 24 * 2 // 2 days

export async function generateStaticParams() {
  return COLLECTIONS.map((collection) => ({ id: String(collection.id) }))
}

async function fetchData(id, pageIndex = 0) {
  const collection = await getCollection(id, pageIndex)
  if (!collection?.items?.length) notFound()

  return {
    collection
  }
}

export default async function CollectionPage({ params }) {
  const { id } = params
  const { collection } = await fetchData(id)
  const collectionName = COLLECTIONS.find((collection) => collection.id === Number(id))?.name ?? '' // id param is string

  return (
    <div className="relative flex w-full flex-col">
      <FloatingHeader initialTitle={collectionName} backLink="/bookmarks" />
      <div className="content-wrapper">
        <div className="content @container">
          <PageTitle title={collectionName} />
          <BookmarkList id={id} initialData={collection} />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  const { id } = params
  const collection = COLLECTIONS.find((collection) => collection.id === Number(id)) // id param is string
  if (!collection) return null

  const siteUrl = `/bookmarks/${collection.id}`
  const seoTitle = `${collection.name} — Bookmarks`
  const seoDescription = `${collection.name} — Bookmarks`

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
