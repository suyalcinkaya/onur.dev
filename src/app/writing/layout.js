import { Suspense } from 'react'

import { SideMenu } from '@/app/_components/SideMenu'
import { LoadingSpinner } from '@/app/_components/LoadingSpinner'
import { WritingLink } from '@/app/writing/_components/WritingLink'
import { getAllPosts } from '@/lib/contentful'

export default async function WritingLayout({ children }) {
  const { allPosts } = await fetchData()

  return (
    <div className="flex w-full">
      <SideMenu title="Writing" isInner>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {allPosts.map((post) => {
              return <WritingLink key={post.slug} post={post} />
            })}
          </div>
        </Suspense>
      </SideMenu>
      {children}
    </div>
  )
}

async function fetchData() {
  const allPosts = (await getAllPosts()) ?? []
  return { allPosts }
}
