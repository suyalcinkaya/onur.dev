// 'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { SideMenu } from '@/app/_components/SideMenu'
import { getAllPosts } from '@/lib/contentful'
import { getDateTimeFormat } from '@/lib/utils'

export default async function WritingLayout({ children }) {
  const { allPosts } = await fetchData()

  return (
    <div className="flex w-full">
      <SideMenu className="lg:w-96" title="Writing">
        <div className="flex flex-col gap-1 text-sm">
          {allPosts.map((post) => {
            const date = getDateTimeFormat(post.date)
            return (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="flex flex-col gap-1 rounded-lg p-2 hover:bg-slate-200"
              >
                <span className="font-medium">{post.title}</span>
                <span className="text-slate-500">{date}</span>
              </Link>
            )
          })}
        </div>
      </SideMenu>
      {children}
    </div>
  )
}

async function fetchData() {
  const allPosts = (await getAllPosts()) ?? []
  return { allPosts }
}
