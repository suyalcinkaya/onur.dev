import { Suspense } from 'react'

import { WritingList } from '@/app/_components/WritingList'
import { getAllPosts } from '@/lib/contentful'
import { getViewCounts } from '@/lib/supabase'

async function fetchData() {
  const [allPosts, viewCounts] = await Promise.all([getAllPosts(), getViewCounts()])
  return { allPosts, viewCounts }
}

export default async function Home() {
  const { allPosts, viewCounts } = await fetchData()

  console.log('viewCounts', viewCounts)

  return (
    <div className="content">
      <Suspense fallback={null}>
        <WritingList items={allPosts} viewCounts={viewCounts} header="Writing" />
      </Suspense>
    </div>
  )
}
