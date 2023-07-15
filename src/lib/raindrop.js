const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`
  }
}

export const PER_PAGE = 50

export async function getCollection(id, pageIndex = 0) {
  try {
    const response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/${id}?` +
        new URLSearchParams({
          page: pageIndex,
          perpage: PER_PAGE
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
    const response = await fetch('https://api.raindrop.io/rest/v1/collections', options)
    return await response.json()
  } catch (error) {
    console.info(error)
    return null
  }
}
