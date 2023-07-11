export async function getStarredRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/suyalcinkaya/starred?per_page=100&page=1`)
    return await response.json()
  } catch (error) {
    console.info(error)
    return null
  }
}
