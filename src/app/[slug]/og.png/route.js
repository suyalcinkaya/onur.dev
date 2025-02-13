import { ImageResponse } from 'next/og'

import { sharedMetadata } from '@/app/shared-metadata'
import { OpenGraphImage } from '@/components/og-image'
import { getAllPageSlugs, getPageSeo } from '@/lib/contentful'
import { getBoldFont, getRegularFont } from '@/lib/fonts'

export const dynamic = 'force-static'

export const size = {
  width: sharedMetadata.ogImage.width,
  height: sharedMetadata.ogImage.height
}

export async function generateStaticParams() {
  const allPages = await getAllPageSlugs()

  return allPages
    .filter((page) => !page.hasCustomPage) // filter out pages that have custom pages, e.g. /journey
    .map((page) => ({
      slug: page.slug
    }))
}

export async function GET(_, props) {
  const params = await props.params
  const { slug } = params
  const [seoData = {}, regularFontData, boldFontData] = await Promise.all([
    getPageSeo(slug),
    getRegularFont(),
    getBoldFont()
  ])
  const { seo: { title, description, ogImageTitle, ogImageSubtitle } = {} } = seoData

  let icon = null
  switch (slug) {
    case 'stack':
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
          <path d="m14 7 3 3" />
          <path d="M5 6v4" />
          <path d="M19 14v4" />
          <path d="M10 2v2" />
          <path d="M7 8H3" />
          <path d="M21 16h-4" />
          <path d="M11 3H9" />
        </svg>
      )
      break
    default:
      icon = null
      break
  }

  return new ImageResponse(
    (
      <OpenGraphImage
        title={ogImageTitle || title}
        description={ogImageSubtitle || description}
        icon={icon}
        url={slug}
      />
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist Sans',
          data: regularFontData,
          style: 'normal',
          weight: 400
        },
        {
          name: 'Geist Sans',
          data: boldFontData,
          style: 'normal',
          weight: 500
        }
      ]
    }
  )
}
