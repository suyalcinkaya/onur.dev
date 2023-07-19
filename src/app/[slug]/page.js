import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { PageTitle } from '@/app/_components/PageTitle'
import { FloatingHeader } from '@/app/_components/FloatingHeader'
import { GradientBg } from '@/app/_components/GradientBg'
import { RichText } from '@/app/_components/contentful/RichText'
import { getPage, getPageSeo, getAllPageSlugs } from '@/lib/contentful'
import { isDevelopment } from '@/lib/utils'

export async function generateStaticParams() {
  const allPages = await getAllPageSlugs()

  return allPages
    .filter((page) => !page.hasCustomPage) // filter out pages that have custom pages, e.g. /journey
    .map((page) => ({
      slug: page.slug
    }))
}

async function fetchData(slug) {
  const { isEnabled } = draftMode()
  const page = await getPage(slug, isDevelopment ? true : isEnabled)
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
  const seoData = await getPageSeo(slug)
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = `/${slug}`

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
