import { Suspense } from 'react'

import { SideMenu } from '@/components/SideMenu'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { WritingLink } from '@/components/WritingLink'
import { getAllPosts } from '@/lib/contentful'

async function fetchData() {
  const allPosts = await getAllPosts()
  return { allPosts }
}

export default async function WritingLayout({ children }) {
  const { allPosts } = await fetchData()

  return (
    <>
      <SideMenu title="Writing" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {allPosts.map((post) => {
              return <WritingLink key={post.slug} post={post} />
            })}
          </div>
        </Suspense>
      </SideMenu>
      <div className="lg:bg-dots flex-1">{children}</div>
    </>
  )
}
