const URL = ['https://api.raindrop.io/rest/v1/raindrops/0?', 'perpage=50&'].join('')

async function getBookmarks() {
  const res = await fetch(URL, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
    })
  })
  const data = await res.json()
  return data
}

export default getBookmarks
