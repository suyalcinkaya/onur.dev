import { draftMode } from 'next/headers'
import { ImageResponse } from 'next/og'

import { OpenGraphImage } from '@/components/og-image'
import { getWritingSeo, getAllPostSlugs } from '@/lib/contentful'
import { getRegularFont, getBoldFont } from '@/lib/fonts'
import { sharedMetadata } from '@/app/shared-metadata'
import { isDevelopment } from '@/lib/utils'

export const size = {
  width: sharedMetadata.ogImage.width,
  height: sharedMetadata.ogImage.height
}

export async function generateStaticParams() {
  const allPosts = await getAllPostSlugs()
  return allPosts.map((post) => ({ slug: post.slug }))
}

export async function GET(_, { params }) {
  const { isEnabled } = draftMode()
  const { slug } = params
  const [seoData, regularFontData, boldFontData] = await Promise.all([
    getWritingSeo(slug, isDevelopment ? true : isEnabled),
    getRegularFont(),
    getBoldFont()
  ])
  if (!seoData) return null
  const {
    seo: { title, ogImageTitle, ogImageSubtitle }
  } = seoData

  return new ImageResponse(
    (
      <OpenGraphImage
        title={ogImageTitle || title}
        description={ogImageSubtitle || 'by Onur Şuyalçınkaya'}
        url="writing"
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
