import { COLLECTION_IDS } from '@/lib/constants'

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`
  }
}

const RAINDROP_API_URL = 'https://api.raindrop.io/rest/v1'

export async function getRaindrops(id, pageIndex = 0) {
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

export async function getCollections() {
  try {
    const response = await fetch(`${RAINDROP_API_URL}/collections`, options)
    const collections = await response.json()
    const filteredCollections = collections.items.filter((collection) => COLLECTION_IDS.includes(collection._id))
    return filteredCollections
  } catch (error) {
    console.info(error)
    return null
  }
}

export async function getCollection(id) {
  try {
    const response = await fetch(`${RAINDROP_API_URL}/collection/${id}`, options)
    return await response.json()
  } catch (error) {
    console.info(error)
    return null
  }
}
