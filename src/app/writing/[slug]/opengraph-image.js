import { ImageResponse } from 'next/server'

import { OpenGraphImage } from '@/app/_components/OpenGraphImage'
import { getPostSeo } from '@/lib/contentful'
import { getMediumFont, getBoldFont } from '@/lib/utils'

export const runtime = 'edge'
export const alt = 'Writing'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

export default async function Image({ params }) {
  const { slug } = params
  const seoData = (await getPostSeo(slug)) ?? null
  if (!seoData) return null

  const { title } = seoData

  return new ImageResponse(<OpenGraphImage title={title} description="by Onur Şuyalçınkaya" url="writing" />, {
    ...size,
    fonts: [
      {
        name: 'SF Pro',
        data: await getMediumFont(),
        style: 'normal',
        weight: 500
      },
      {
        name: 'SF Pro',
        data: await getBoldFont(),
        style: 'normal',
        weight: 600
      }
    ]
  })
}
