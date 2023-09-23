import Link from 'next/link'

import { FloatingHeader } from '@/components/floating-header'
import { getPageSeo, getAllPosts } from '@/lib/contentful'
import { getDateTimeFormat } from '@/lib/utils'

export default async function Writing() {
  const { allPosts } = await fetchData()

  return (
    <div className="w-full text-sm lg:hidden">
      <FloatingHeader initialTitle="Writing" />
      <div className="scrollable-container">
        {allPosts.map((post) => {
          const date = getDateTimeFormat(post.date)
          return (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="flex flex-col gap-1 border-b px-4 py-3 hover:bg-gray-100"
            >
              <span className="font-medium">{post.title}</span>
              <span className="text-slate-500">{date}</span>
            </Link>
          )
        })}
      </div>
    </div>
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
