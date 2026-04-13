'use cache'

import { cacheLife } from 'next/cache'
import { Suspense } from 'react'

import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { SideMenu } from '@/components/side-menu'
import { WritingListLayout } from '@/components/writing/writing-list-layout'
import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts } from '@/lib/utils'

async function fetchData() {
  'use cache'
  cacheLife('max')

  const allPosts = await getAllPosts()
  const sortedPosts = getSortedPosts(allPosts)
  return { sortedPosts }
}

export default async function WritingLayout({ children }) {
  cacheLife('max')
  const { sortedPosts } = await fetchData()

  return (
    <>
      <SideMenu title="Writing" isInner>
        <Suspense fallback={<ScreenLoadingSpinner />}>
          <WritingListLayout list={sortedPosts} />
        </Suspense>
      </SideMenu>
      <div className="lg:bg-dots flex-1">{children}</div>
    </>
  )
}
