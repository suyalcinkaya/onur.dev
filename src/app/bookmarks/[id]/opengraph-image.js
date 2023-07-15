import { ImageResponse } from 'next/server'

import { OpenGraphImage } from '@/app/_components/OpenGraphImage'
// import { getCollection } from '@/lib/raindrop'
import { COLLECTIONS } from '@/lib/constants'

export const runtime = 'edge'
export const alt = 'Bookmarks'
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

export default async function Image({ params }) {
  const { id } = params
  // const collection = await getCollection(id)
  const collectionName = COLLECTIONS.find((collection) => collection.id === Number(id))?.name ?? '' // id param is string

  return new ImageResponse(<OpenGraphImage title={collectionName} url="bookmarks" />, {
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
