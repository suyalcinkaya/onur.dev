import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { getPageSeo } from '@/lib/contentful'
import { getCollections } from '@/lib/raindrop'
import { sortByProperty } from '@/lib/utils'

async function fetchData() {
  const collections = await getCollections()
  const sortedCollections = sortByProperty(collections, 'title')
  return { collections: sortedCollections }
}

export default async function Writing() {
  const { collections } = await fetchData()

  return (
    <ScrollArea className="flex flex-col lg:hidden">
      <FloatingHeader title="Bookmarks" />
      <div>
        {collections.map((collection) => {
          return (
            <Link
              key={collection._id}
              href={`/bookmarks/${collection.slug}`}
              className="flex flex-col gap-1 border-b px-4 py-3 text-sm hover:bg-gray-100"
            >
              <span className="font-medium">{collection.title}</span>
              <span className="text-slate-500">{collection.count} bookmarks</span>
            </Link>
          )
        })}
      </div>
    </ScrollArea>
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
