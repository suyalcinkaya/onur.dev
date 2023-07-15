import { ImageResponse } from 'next/server'

import { OpenGraphImage } from '@/app/_components/OpenGraphImage'
import { getPageSeo } from '@/lib/contentful'

export const runtime = 'edge'
export const alt = 'Journey'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

const getFont = async () => {
  const response = await fetch(new URL('@/assets/SFProDisplay-Bold.ttf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
}

export default async function Image() {
  const seoData = (await getPageSeo('journey')) ?? null
  const { title } = seoData

  return new ImageResponse(<OpenGraphImage title={title} url="journey" />, {
    ...size,
    fonts: [
      {
        name: 'SF Pro',
        data: await getFont(),
        style: 'normal',
        weight: 400
      }
    ]
  })
}
