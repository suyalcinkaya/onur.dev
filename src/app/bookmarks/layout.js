import { Suspense } from 'react'

import { SideMenu } from '@/components/SideMenu'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ListItem } from '@/components/ListItem'
import { getCollections } from '@/lib/raindrop'
import { COLLECTION_IDS } from '@/lib/constants'
import { sortByProperty } from '@/lib/utils'

export const revalidate = 60 * 60 * 24 * 2 // 2 days

async function fetchData() {
  const collections = await getCollections()
  const filteredCollections = collections.items.filter((collection) => COLLECTION_IDS.includes(collection._id))
  const sortedCollections = sortByProperty(filteredCollections, 'title')
  return { collections: sortedCollections }
}

export default async function BookmarksLayout({ children }) {
  const { collections } = await fetchData()

  return (
    <div className="flex w-full">
      <SideMenu title="Bookmarks" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {collections.map((collection) => {
              return (
                <ListItem
                  key={collection._id}
                  path={`/bookmarks/${collection._id}`}
                  title={collection.title}
                  description={`${collection.count} bookmarks`}
                />
              )
            })}
          </div>
        </Suspense>
      </SideMenu>
      <div className="lg:bg-grid flex-1">{children}</div>
    </div>
  )
}
