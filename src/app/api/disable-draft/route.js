import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  draftMode().disable()
  return NextResponse.json({ messsage: 'Draft mode is disabled successfully', now: Date.now() }, { status: 200 })
}
