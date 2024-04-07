import { ImageResponse } from 'next/og'

import { OpenGraphImage } from '@/components/og-image'
import { getWritingSeo } from '@/lib/contentful'
import { getRegularFont, getBoldFont } from '@/lib/fonts'
import { sharedImage } from '@/app/shared-metadata'

export const runtime = 'edge'
export const alt = 'Writing'
export const size = {
  width: sharedImage.width,
  height: sharedImage.height
}
export const contentType = sharedImage.type

export default async function Image({ params }) {
  const { slug } = params
  const [seoData, regularFontData, boldFontData] = await Promise.all([
    getWritingSeo(slug),
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
          name: 'SF Pro',
          data: regularFontData,
          style: 'normal',
          weight: 500
        },
        {
          name: 'SF Pro',
          data: boldFontData,
          style: 'normal',
          weight: 600
        }
      ]
    }
  )
}
