import { ImageResponse } from 'next/og'

import { OpenGraphImage } from '@/components/og-image'
import { getMediumFont, getBoldFont } from '@/lib/utils'
import { sharedTitle, sharedDescription, sharedImage } from '@/app/shared-metadata'

export const runtime = 'edge'
export const alt = sharedTitle
export const size = {
  width: sharedImage.width,
  height: sharedImage.height
}
export const contentType = sharedImage.type

/* export const getImage = async () => {
  const response = await fetch(new URL('@/assets/me.jpg', import.meta.url))
  const font = await response.arrayBuffer()
  return font
} */

export default async function Image() {
  return new ImageResponse(
    (
      <OpenGraphImage
        title={sharedTitle}
        description={sharedDescription}
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
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
        }
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
