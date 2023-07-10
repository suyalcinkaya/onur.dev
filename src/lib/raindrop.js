const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
}

const options = {
  method: 'GET',
  headers
}

export async function getCollection(id) {
  return fetch(`https://api.raindrop.io/rest/v1/raindrops/${id}`, options).then((response) => response.json())
}

export async function getCollections() {
  return fetch(`https://api.raindrop.io/rest/v1/collections`, options).then((response) => response.json())
}
