export default async function exit(_, res) {
  // Exit from "Preview Mode".
  res.clearPreviewData()

  // Redirect back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}
