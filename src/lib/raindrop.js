export async function fetchRaindropBookmarks() {
  return fetch('https://api.raindrop.io/rest/v1/raindrops/16949672', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
    }
  }).then((response) => response.json())
}
