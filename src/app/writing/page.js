import Link from 'next/link'

import FloatingHeader from '@/app/_components/FloatingHeader'
import { getPageSeo, getAllPosts } from '@/lib/contentful'
import { getOgImageUrl, getDateTimeFormat } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

export default async function Writing() {
  const { allPosts } = await fetchData()

  return (
    <div className="w-full text-sm lg:hidden">
      <FloatingHeader initialTitle="Writing" />
      <div>
        {allPosts.map((post) => {
          const date = getDateTimeFormat(post.date)
          return (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="flex flex-col gap-1 border-b p-3 hover:bg-gray-200"
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
  const allPosts = (await getAllPosts()) ?? []
  return { allPosts }
}

export async function generateStaticParams() {
  const allPosts = (await getAllPosts()) ?? []
  return allPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata() {
  const seoData = (await getPageSeo('writing')) ?? null
  if (!seoData) return null

  const { title, url, seoTitle, seoDescription } = seoData
  const siteUrl = `/${url}`

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          ...openGraphImage,
          url: getOgImageUrl({ title, url }),
          alt: title
        }
      ],
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
