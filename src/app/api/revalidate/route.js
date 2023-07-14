import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export const runtime = 'edge'

export async function GET(req, res) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')

  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const path = req.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
