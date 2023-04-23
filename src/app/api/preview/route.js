import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const secret = searchParams.get('secret')

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.status(401).json({ message: 'Invalid token' })
  }

  // Enable Preview Mode.
  NextResponse.setPreviewData({})

  // Redirect to the slug from the fetched url.
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: slug || '/' })
  NextResponse.write(
    `
      <!DOCTYPE html>
      <html><head><meta http-equiv="Refresh" content="0; url=${slug || '/'}" />
        <script>window.location.href = "${slug || '/'}"</script>
      </head>
    `
  )
  NextResponse.end('Preview mode enabled')
}
