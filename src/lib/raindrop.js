import { COLLECTION_IDS } from '@/lib/constants'

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`
  }
}

const RAINDROP_API_URL = 'https://api.raindrop.io/rest/v1'

export async function getBookmarkItems(id, pageIndex = 0) {
  try {
    const response = await fetch(
      `${RAINDROP_API_URL}/raindrops/${id}?` +
        new URLSearchParams({
          page: pageIndex,
          perpage: 50
        }),
      options
    )
    return await response.json()
  } catch (error) {
    console.info(error)
    return null
  }
}

export async function getBookmarks() {
  try {
    const response = await fetch(`${RAINDROP_API_URL}/collections`, options)
    const bookmarks = await response.json()
    const filteredBookmarks = bookmarks.items.filter((bookmark) => COLLECTION_IDS.includes(bookmark._id))
    return filteredBookmarks
  } catch (error) {
    console.info(error)
    return null
  }
}

export async function getBookmark(id) {
  try {
    const response = await fetch(`${RAINDROP_API_URL}/collection/${id}`, options)
    return await response.json()
  } catch (error) {
    console.info(error)
    return null
  }
}
