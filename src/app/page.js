import { Suspense } from 'react'

import { LoadingSpinner } from '@/app/_components/LoadingSpinner'
import { WritingList } from '@/app/_components/WritingList'
import { FloatingHeader } from '@/app/_components/FloatingHeader'
import { PageTitle } from '@/app/_components/PageTitle'
import { getAllPosts } from '@/lib/contentful'
import { getViewCounts } from '@/lib/supabase'

async function fetchData() {
  const [allPosts, viewCounts] = await Promise.all([getAllPosts(), getViewCounts()])
  return { allPosts, viewCounts }
}

export default async function Home() {
  const { allPosts, viewCounts } = await fetchData()

  return (
    <div className="relative flex w-full flex-col">
      <FloatingHeader />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" />
          <p>
            {`I'm Onur (meaning "Honour" in English), a software engineer, dj, writer, and minimalist based in Amsterdam,
          The Netherlands.`}
          </p>
          <p>
            I develop things as a Senior Frontend Software Engineer at Bitvavo. Previously, I worked as a Senior
            Frontend Software Engineer at heycar, Frontend Software Engineer at Yemeksepeti, Fullstack Software Engineer
            at Sistas, Mobile Developer at Tanbula, and Specialist at Apple.
          </p>
          <Suspense fallback={<LoadingSpinner />}>
            <h2 className="mb-4 mt-8">Writing</h2>
            <WritingList items={allPosts} viewCounts={viewCounts} header="Writing" />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
