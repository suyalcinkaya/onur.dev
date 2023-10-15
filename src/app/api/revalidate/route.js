import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export const runtime = 'edge'

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')

  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const path = searchParams.get('path') || '/'
  revalidatePath(path)
  return NextResponse.json(
    { revalidated: true, message: `Revalidation request for path: ${path} is successful`, now: Date.now() },
    { status: 200 }
  )
}
