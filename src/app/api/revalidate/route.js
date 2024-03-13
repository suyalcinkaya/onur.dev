import { revalidatePath } from 'next/cache'

import { CONTENT_TYPES } from '@/lib/constants'

export const runtime = 'edge'
export const dynamic = 'auto'

export async function POST(request) {
  const requestHeaders = new Headers(request.headers)
  const secret = requestHeaders.get('x-revalidate-secret')
  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: 'Invalid secret'
      },
      { status: 401 }
    )
  }

  const payload = await request.json()
  const contentTypeId = payload.contentTypeId

  switch (contentTypeId) {
    case CONTENT_TYPES.PAGE: {
      const path = payload.slug
      if (path) {
        revalidatePath(`/${path}`)
      } else {
        return Response.json(
          {
            revalidated: false,
            now: Date.now(),
            message: 'Missing page path to revalidate'
          },
          { status: 400 }
        )
      }
      break
    }
    case CONTENT_TYPES.POST: {
      const path = payload.slug
      if (path) {
        revalidatePath(`/writing/${path}`)
        revalidatePath('/writing')
      } else {
        return Response.json(
          {
            revalidated: false,
            now: Date.now(),
            message: 'Missing writing path to revalidate'
          },
          { status: 400 }
        )
      }
      break
    }
    case CONTENT_TYPES.LOGBOOK: {
      revalidatePath('/journey')
      break
    }
    default:
      return Response.json(
        {
          revalidated: false,
          now: Date.now(),
          message: 'Invalid content type'
        },
        { status: 400 }
      )
  }

  return Response.json({ revalidated: true, now: Date.now() })
}
