import { Suspense } from 'react'

import { List } from '@/components/List'
import { getAllPosts } from '@/lib/contentful'

async function fetchData() {
  const allPosts = (await getAllPosts()) ?? []
  return { allPosts }
}

export default async function Home() {
  const { allPosts } = await fetchData()

  return (
    <div className="content">
      <Suspense fallback={null}>
        <List items={allPosts} header="Writing" />
      </Suspense>
    </div>
  )
}
