import { Suspense } from 'react'

import { SideMenu } from '@/components/side-menu'
import { LoadingSpinner } from '@/components/loading-spinner'
import { ListItem } from '@/components/list-item'
import { getCollections } from '@/lib/raindrop'
import { sortByProperty } from '@/lib/utils'

export const revalidate = 60 * 60 * 24 * 2 // 2 days

async function fetchData() {
  const collections = await getCollections()
  const sortedCollections = sortByProperty(collections, 'title')
  return { collections: sortedCollections }
}

export default async function BookmarksLayout({ children }) {
  const { collections } = await fetchData()

  return (
    <div className="flex w-full">
      <SideMenu title="Bookmarks" href="/bookmarks" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {collections.map((collection) => {
              return (
                <ListItem
                  key={collection._id}
                  path={`/bookmarks/${collection.slug}`}
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
