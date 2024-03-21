import { revalidatePath } from 'next/cache'

import { CONTENT_TYPES } from '@/lib/constants'

export const dynamic = 'auto' // https://www.reddit.com/r/nextjs/comments/14iu6td/revalidatepath_not_updating_generatestaticparams/

const secret = `${process.env.NEXT_REVALIDATE_SECRET}`

export async function POST(request) {
  const payload = await request.json()

  const requestHeaders = new Headers(request.headers)
  const revalidateSecret = requestHeaders.get('x-revalidate-secret')
  if (revalidateSecret !== secret) {
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: 'Invalid secret'
      },
      { status: 401 }
    )
  }

  const { contentTypeId, slug } = payload

  switch (contentTypeId) {
    case CONTENT_TYPES.PAGE:
      if (slug) {
        revalidatePath(`/${slug}`)
      } else {
        return Response.json(
          {
            revalidated: false,
            now: Date.now(),
            message: 'Missing page slug to revalidate'
          },
          { status: 400 }
        )
      }
      break
    case CONTENT_TYPES.POST:
      if (slug) {
        revalidatePath(`/writing/${slug}`)
        revalidatePath('/writing')
      } else {
        return Response.json(
          {
            revalidated: false,
            now: Date.now(),
            message: 'Missing writing slug to revalidate'
          },
          { status: 400 }
        )
      }
      break
    case CONTENT_TYPES.LOGBOOK:
      revalidatePath('/journey')
      break
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
