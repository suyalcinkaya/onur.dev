import { ImageResponse } from 'next/server'

import { OpenGraphImage } from '@/app/_components/OpenGraphImage'
import { getPageSeo } from '@/lib/contentful'
import { getMediumFont, getBoldFont } from '@/lib/utils'
import { image } from '@/app/shared-metadata'

export const runtime = 'edge'
export const alt = 'Writing'
export const size = {
  width: image.width,
  height: image.height
}
export const contentType = image.type

export default async function Image() {
  const seoData = (await getPageSeo('writing')) ?? null
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
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        }
        url="writing"
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
