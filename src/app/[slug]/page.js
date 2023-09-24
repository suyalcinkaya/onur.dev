import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { ScrollArea } from '@/components/scroll-area'
import { PageTitle } from '@/components/page-title'
import { FloatingHeader } from '@/components/floating-header'
import { GradientBg } from '@/components/gradient-bg'
import { RichText } from '@/components/contentful/rich-text'
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
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <GradientBg />
      <FloatingHeader scrollTitle={title} />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title={title} />
          <RichText content={content} />
        </div>
      </div>
    </ScrollArea>
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
