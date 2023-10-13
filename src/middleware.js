import { NextResponse } from 'next/server'

export const middleware = async (req, event) => {
  const pathname = req.nextUrl.pathname

  const sendAnalytics = async () => {
    const slug = pathname.match(/\/writing\/(.*)/)?.[1]
    if (!slug) return

    const URL =
      process.env.NODE_ENV === 'production'
        ? 'https://onur.dev/api/increment-views'
        : 'http://localhost:3000/api/increment-views'

    try {
      const res = await fetch(`${URL}?slug=${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status !== 200) console.error('Failed to send analytics', res)
    } catch (error) {
      console.error('Error sending analytics', error)
    }
  }

  /**
   * The `event.waitUntil` function is the real magic here.
   * It enables the response to proceed without waiting for the completion of `sendAnalytics()`.
   * This ensures that the user experience remains uninterrupted and free from unnecessary delays.
   */
  event.waitUntil(sendAnalytics())
  return NextResponse.next()
}

export const config = {
  matcher: '/writing/:path/'
}
