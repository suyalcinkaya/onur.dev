import { Suspense } from 'react'

import PageTitle from '@/components/PageTitle'
import { List } from '@/components/List'
import { getAllPosts, getPageSeo } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

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

async function fetchData() {
  const allPosts = (await getAllPosts()) ?? []
  return { allPosts }
}

export default async function Writing() {
  const { allPosts } = await fetchData()

  return (
    <div className="content">
      <PageTitle title="Writing" />
      <Suspense fallback={null}>
        <List items={allPosts} />
      </Suspense>
    </div>
  )
}
