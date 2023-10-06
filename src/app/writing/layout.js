import { Suspense } from 'react'

import { SideMenu } from '@/components/side-menu'
import { LoadingSpinner } from '@/components/loading-spinner'
import { WritingLink } from '@/components/writing-link'
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
      <SideMenu title="Writing" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {sortedPosts.map((post) => {
              return <WritingLink key={post.slug} post={post} />
            })}
          </div>
        </Suspense>
      </SideMenu>
      <div className="lg:bg-dots flex-1">{children}</div>
    </>
  )
}
