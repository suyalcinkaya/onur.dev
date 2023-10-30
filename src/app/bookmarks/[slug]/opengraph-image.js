import { ImageResponse } from 'next/og'

import { OpenGraphImage } from '@/components/og-image'
import { getMediumFont, getBoldFont } from '@/lib/utils'
import { getCollections } from '@/lib/raindrop'
import { sharedImage } from '@/app/shared-metadata'

export const runtime = 'edge'
export const alt = 'Bookmarks'
export const size = {
  width: sharedImage.width,
  height: sharedImage.height
}
export const contentType = sharedImage.type

export default async function Image({ params }) {
  const { slug } = params
  const collections = await getCollections()
  const collection = collections.find((collection) => collection.slug === slug)

  if (!collection) return null

  return new ImageResponse(
    (
      <OpenGraphImage
        title={collection.title}
        description={`A curated selection of various handpicked ${collection.title.toLowerCase()} bookmarks by Onur Şuyalçınkaya`}
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
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        }
        url="bookmarks"
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
