export default async function preview(req, res) {
  const {
    query: { secret, slug }
  } = req

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Enable Preview Mode.
  res.setPreviewData({})

  // Redirect to the slug from the fetched url.
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: slug || '/' })
  res.write(
    `
      <!DOCTYPE html>
      <html><head><meta http-equiv="Refresh" content="0; url=${slug || '/'}" />
        <script>window.location.href = "${slug || '/'}"</script>
      </head>
    `
  )
  res.end('Preview mode enabled')
}
