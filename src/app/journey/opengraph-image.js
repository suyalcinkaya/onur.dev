import { ImageResponse } from 'next/server'

import { OpenGraphImage } from '@/app/_components/OpenGraphImage'
import { getPageSeo } from '@/lib/contentful'
import { getMediumFont, getBoldFont } from '@/lib/utils'
import { image } from '@/app/shared-metadata'

export const runtime = 'edge'
export const alt = 'Journey'
export const size = {
  width: image.width,
  height: image.height
}
export const contentType = image.type

export default async function Image() {
  const seoData = (await getPageSeo('journey')) ?? null
  const { title, seoDescription } = seoData

  return new ImageResponse(
    (
      <OpenGraphImage
        title={title}
        description={seoDescription}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
        }
        url="journey"
      />
    ),
    {
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
    }
  )
}
