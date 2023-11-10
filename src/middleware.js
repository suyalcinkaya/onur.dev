import { NextResponse } from 'next/server'

export function middleware(request, event) {
  const { pathname } = request.nextUrl
  const writingSlug = pathname.match(/\/writing\/(.*)/)?.[1]

  async function sendAnalytics() {
    if (!writingSlug) return

    const URL =
      process.env.NODE_ENV === 'production'
        ? 'https://onur.dev/api/increment-views'
        : 'http://localhost:3000/api/increment-views'

    try {
      const res = await fetch(`${URL}?slug=${writingSlug}`, {
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
  if (writingSlug) event.waitUntil(sendAnalytics())
  return NextResponse.next()
}

export const config = {
  matcher: '/writing/:path/'
}
