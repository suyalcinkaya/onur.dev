import Link from 'next/link'

import { getPageSeo } from '@/lib/contentful'
import FloatingHeader from '@/app/_components/FloatingHeader'
import { getOgImageUrl } from '@/lib/utils'
import { COLLECTIONS } from '@/lib/constants'
import { openGraphImage } from '@/app/shared-metadata'

export default async function Writing() {
  return (
    <div className="w-full text-sm lg:hidden">
      <FloatingHeader initialTitle="Bookmarks" />
      <div>
        {COLLECTIONS.map((collection) => {
          return (
            <Link
              key={collection.id}
              href={`/bookmarks/${collection.id}`}
              className="flex flex-col gap-1 border-b p-3 hover:bg-gray-200"
            >
              <span className="font-medium">{collection.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return COLLECTIONS.map((collection) => ({ id: collection.id }))
}

export async function generateMetadata() {
  const seoData = (await getPageSeo('bookmarks')) ?? null
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
