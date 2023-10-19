import { Suspense } from 'react'

import { SideMenu } from '@/components/side-menu'
import { LoadingSpinner } from '@/components/loading-spinner'
import { WritingListLayout } from '@/components/writing/writing-list-layout'
import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts } from '@/lib/utils'

async function fetchData() {
  const allPosts = await getAllPosts()
  return { allPosts }
}

export default async function WritingLayout({ children }) {
  const { allPosts } = await fetchData()
  const sortedPosts = getSortedPosts(allPosts)

  return (
    <>
      <SideMenu title="Writing" href="/writing" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <WritingListLayout list={sortedPosts} />
        </Suspense>
      </SideMenu>
      <div className="lg:bg-dots flex-1">{children}</div>
    </>
  )
}
