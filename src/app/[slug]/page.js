import { notFound } from 'next/navigation'

import { PageTitle } from '@/app/_components/PageTitle'
import { FloatingHeader } from '@/app/_components/FloatingHeader'
import { GradientBg } from '@/app/_components/GradientBg'
import { RichText } from '@/app/_components/contentful/RichText'
import { getPage, getPageSeo, getAllPages } from '@/lib/contentful'

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
    <div className="relative flex w-full flex-col">
      <GradientBg />
      <FloatingHeader initialTitle={title} />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title={title} />
          <RichText content={content} />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const seoData = (await getPageSeo(slug)) ?? null
  if (!seoData) return null

  const { url, seoTitle, seoDescription } = seoData
  const siteUrl = `/${url}`

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
