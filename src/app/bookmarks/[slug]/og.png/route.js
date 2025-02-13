import { ImageResponse } from 'next/og'

import { sharedMetadata } from '@/app/shared-metadata'
import { OpenGraphImage } from '@/components/og-image'
import { getBoldFont, getRegularFont } from '@/lib/fonts'
import { getBookmarks } from '@/lib/raindrop'

export const dynamic = 'force-static'

export const size = {
  width: sharedMetadata.ogImage.width,
  height: sharedMetadata.ogImage.height
}

export async function generateStaticParams() {
  const bookmarks = await getBookmarks()
  return bookmarks.map((bookmark) => ({ slug: bookmark.slug }))
}

export async function GET(_, props) {
  const params = await props.params
  const { slug } = params
  const [bookmarks, regularFontData, boldFontData] = await Promise.all([
    getBookmarks(),
    getRegularFont(),
    getBoldFont()
  ])
  const currentBookmark = bookmarks.find((bookmark) => bookmark.slug === slug)
  if (!currentBookmark) return null

  return new ImageResponse(
    (
      <OpenGraphImage
        title={currentBookmark.title}
        description={`A curated selection of various handpicked ${currentBookmark.title.toLowerCase()} bookmarks by Onur Şuyalçınkaya`}
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
