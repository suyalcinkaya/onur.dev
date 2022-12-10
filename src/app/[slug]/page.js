import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import PageTitle from '@/components/PageTitle'
import RichText from '@/components/contentful/RichText'
import { getAllPages, getPage, getPageSeo } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { sharedOpenGraphImage } from '@/app/shared-metadata'

export async function generateMetadata({ params }) {
  const { slug } = params
  const seoData = (await getPageSeo(slug)) ?? null
  if (!seoData) return null

  const { title, url, seoTitle, seoDescription } = seoData
  const siteUrl = `https://onur.dev/${url}`

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          ...sharedOpenGraphImage,
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

export default async function PageSlug({ params }) {
  const { slug } = params
  const {
    page: { title, content }
  } = await fetchData(slug)

  return (
    <div className="content">
      <PageTitle title={title} />
      <Suspense fallback={null}>
        <RichText content={content} />
      </Suspense>
    </div>
  )
}

async function fetchData(slug) {
  const page = (await getPage(slug)) ?? null
  if (!page) notFound()
  return { page, headerTitle: page?.title || '' }
}

export async function generateStaticParams() {
  const allPages = (await getAllPages()) ?? []

  return allPages
    .filter((page) => !Boolean(page.hasCustomPage))
    .map((page) => ({
      slug: page.url
    }))
}
