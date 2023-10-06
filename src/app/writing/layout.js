import { Suspense } from 'react'

import { SideMenu } from '@/components/side-menu'
import { LoadingSpinner } from '@/components/loading-spinner'
import { WritingLink } from '@/components/writing-link'
import { getAllPosts } from '@/lib/contentful'

async function fetchData() {
  const allPosts = await getAllPosts()
  return { allPosts }
}

export default async function WritingLayout({ children }) {
  const { allPosts } = await fetchData()

  const sortedAllPosts = allPosts.sort((a, b) => {
    const dateA = a.date || a.sys.firstPublishedAt || new Date()
    const dateB = b.date || b.sys.firstPublishedAt || new Date()
    return new Date(dateB) - new Date(dateA)
  })

  return (
    <>
      <SideMenu title="Writing" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {sortedAllPosts.map((post) => {
              return <WritingLink key={post.slug} post={post} />
            })}
          </div>
        </Suspense>
      </SideMenu>
      <div className="lg:bg-dots flex-1">{children}</div>
    </>
  )
}
