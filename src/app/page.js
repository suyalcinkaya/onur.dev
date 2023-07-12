import { Suspense } from 'react'

import { WritingList } from '@/app/_components/WritingList'
import PageTitle from '@/app/_components/PageTitle'
import { getAllPosts } from '@/lib/contentful'
import { getViewCounts } from '@/lib/supabase'

async function fetchData() {
  const [allPosts, viewCounts] = await Promise.all([getAllPosts(), getViewCounts()])
  return { allPosts, viewCounts }
}

export default async function Home() {
  const { allPosts, viewCounts } = await fetchData()

  return (
    <div className="content-wrapper">
      <div className="content">
        <PageTitle title="Home" />
        <p>
          {`I'm Onur (meaning "Honour" in English), a software engineer, dj, writer, and minimalist based in Amsterdam,
          The Netherlands.`}
        </p>
        <p>
          I develop things as a Senior Frontend Software Engineer at Bitvavo. Previously, I worked as a Senior Frontend
          Software Engineer at heycar, Frontend Software Engineer at Yemeksepeti, Fullstack Software Engineer at Sistas,
          Mobile Developer at Tanbula, and Specialist at Apple.
        </p>
        <Suspense fallback={null}>
          <WritingList items={allPosts} viewCounts={viewCounts} header="Writing" />
        </Suspense>
      </div>
    </div>
  )
}
