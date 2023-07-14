import { Suspense } from 'react'

import { SideMenu } from '@/app/_components/SideMenu'
import { LoadingSpinner } from '@/app/_components/LoadingSpinner'
import { ListItem } from '@/app/_components/ListItem'
import { getCollections } from '@/lib/raindrop'
import { COLLECTIONS } from '@/lib/constants'

export default async function BookmarksLayout({ children }) {
  const { collections } = await fetchData()

  return (
    <div className="flex w-full">
      <SideMenu title="Bookmarks" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {collections.map((collection) => {
              const title = COLLECTIONS.find((c) => c.id === collection._id)?.name
              return (
                <ListItem
                  key={collection._id}
                  path={`/bookmarks/${collection._id}`}
                  title={title}
                  description={`${collection.count} items`}
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

async function fetchData() {
  const collections = await getCollections()

  const filteredAndSortedCollections = collections.items
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
