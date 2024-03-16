import { Suspense } from 'react'

import { SideMenu } from '@/components/side-menu'
import { LoadingSpinner } from '@/components/loading-spinner'
import { WritingListLayout } from '@/components/writing/writing-list-layout'
import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts } from '@/lib/utils'

async function fetchData() {
  const allPosts = await getAllPosts()
  const sortedPosts = getSortedPosts(allPosts)
  return { sortedPosts }
}

export default async function WritingLayout({ children }) {
  const { sortedPosts } = await fetchData()

  return (
    <>
      <SideMenu title="Writing" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <WritingListLayout list={sortedPosts} />
        </Suspense>
      </SideMenu>
      <div className="lg:bg-dots flex-1">{children}</div>
    </>
  )
}
