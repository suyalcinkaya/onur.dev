import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const slug = searchParams.get('slug')
  const draft = await draftMode()
  draft.enable()
  redirect(slug ?? '/')
}
