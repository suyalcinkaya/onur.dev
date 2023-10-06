import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { getPageSeo, getAllPosts } from '@/lib/contentful'
import { getDateTimeFormat } from '@/lib/utils'

export default async function Writing() {
  const { allPosts } = await fetchData()

  const sortedAllPosts = allPosts.sort((a, b) => {
    const dateA = a.date || a.sys.firstPublishedAt
    const dateB = b.date || b.sys.firstPublishedAt
    return new Date(dateB) - new Date(dateA)
  })

  return (
    <ScrollArea className="flex flex-col lg:hidden">
      <FloatingHeader title="Writing" />
      <div>
        {sortedAllPosts.map((post) => {
          const date = post.date || post.sys.firstPublishedAt
          const formattedDate = getDateTimeFormat(date)
          return (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="flex flex-col gap-1 border-b px-4 py-3 text-sm hover:bg-gray-100"
            >
              <span className="font-medium">{post.title}</span>
              <span className="text-slate-500">{formattedDate}</span>
            </Link>
          )
        })}
      </div>
    </ScrollArea>
  )
}

async function fetchData() {
  const allPosts = await getAllPosts()
  return { allPosts }
}

export async function generateMetadata() {
  const seoData = await getPageSeo('writing')
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = '/writing'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
