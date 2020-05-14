const getSlugs = (context) => {
  const keys = context.keys()

  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

    return slug
  })
  return data
}

export default getSlugs
