import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import PageTitle from '@/app/_components/PageTitle'
import RichText from '@/app/_components/contentful/RichText'
import { getAllPages, getPage, getPageSeo } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

export async function generateMetadata({ params }) {
  const { slug } = params
  const seoData = (await getPageSeo(slug)) ?? null
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

export async function generateStaticParams() {
  const allPages = (await getAllPages()) ?? []

  return allPages.length > 0
    ? allPages
        .filter((page) => !page.hasCustomPage)
        .map((page) => ({
          slug: page.url
        }))
    : []
}

async function fetchData(slug) {
  const page = (await getPage(slug)) ?? null
  if (!page) notFound()
  return { page }
}

export default async function PageSlug({ params }) {
  const { slug } = params
  const {
    page: { title, content }
  } = await fetchData(slug)

  return (
    <div className="content-wrapper">
      <div className="content">
        <Suspense fallback={null}>
          <PageTitle title={title} />
          <RichText content={content} />
        </Suspense>
      </div>
    </div>
  )
}
