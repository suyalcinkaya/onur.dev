const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
  }
}

export async function getCollection(id) {
  try {
    const response = await fetch(`https://api.raindrop.io/rest/v1/raindrops/${id}`, options)
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
