import Link from 'next/link'

import { getPageSeo } from '@/lib/contentful'
import { FloatingHeader } from '@/app/_components/FloatingHeader'
import { COLLECTIONS } from '@/lib/constants'
import { getCollections } from '@/lib/raindrop'

async function fetchData() {
  const collections = await getCollections()

  const filteredAndSortedCollections = collections?.items
    .filter((collection) => {
      return COLLECTIONS.some((c) => c.id === collection._id)
    })
    .sort((a, b) => {
      const aIndex = COLLECTIONS.findIndex((c) => c.id === a._id)
      const bIndex = COLLECTIONS.findIndex((c) => c.id === b._id)
      return aIndex - bIndex
    })

  return { collections: filteredAndSortedCollections }
}

export default async function Writing() {
  const { collections } = await fetchData()

  return (
    <div className="w-full text-sm lg:hidden">
      <FloatingHeader initialTitle="Bookmarks" />
      <div>
        {collections.map((collection) => {
          const title = COLLECTIONS.find((c) => c.id === collection._id)?.name
          return (
            <Link
              key={collection._id}
              href={`/bookmarks/${collection._id}`}
              className="flex flex-col gap-1 border-b px-4 py-3 hover:bg-gray-100"
            >
              <span className="font-medium">{title}</span>
              <span className="text-slate-500">{collection.count} bookmarks</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export async function generateMetadata() {
  const seoData = (await getPageSeo('bookmarks')) ?? null
  if (!seoData) return null

  const { url, seoTitle, seoDescription } = seoData
  const siteUrl = `/${url}`

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
