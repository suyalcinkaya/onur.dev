import Link from 'next/link'

import { getPageSeo } from '@/lib/contentful'
import { FloatingHeader } from '@/components/FloatingHeader'
import { COLLECTION_IDS } from '@/lib/constants'
import { getCollections } from '@/lib/raindrop'
import { sortByProperty } from '@/lib/utils'

async function fetchData() {
  const collections = await getCollections()
  const filteredCollections = collections.items.filter((collection) => COLLECTION_IDS.includes(collection._id))
  const sortedCollections = sortByProperty(filteredCollections, 'title')
  return { collections: sortedCollections }
}

export default async function Writing() {
  const { collections } = await fetchData()

  return (
    <div className="w-full text-sm lg:hidden">
      <FloatingHeader initialTitle="Bookmarks" />
      <div className="scrollable-container">
        {collections.map((collection) => {
          return (
            <Link
              key={collection._id}
              href={`/bookmarks/${collection._id}`}
              className="flex flex-col gap-1 border-b px-4 py-3 hover:bg-gray-100"
            >
              <span className="font-medium">{collection.title}</span>
              <span className="text-slate-500">{collection.count} bookmarks</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export async function generateMetadata() {
  const seoData = await getPageSeo('bookmarks')
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = '/bookmarks'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
