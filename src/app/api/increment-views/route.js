import { NextResponse } from 'next/server'

import supabase from '@/lib/supabase/private'
import { isDevelopment } from '@/lib/utils'

export async function POST(request) {
  if (isDevelopment) return NextResponse.json({ error: 'Not available in development' }, { status: 400 })

  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug')
  if (!slug) return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 })

  try {
    await supabase.rpc('increment_view_count', { page_slug: slug })
    return NextResponse.json({ messsage: `View count incremented successfully for slug: ${slug}` }, { status: 200 })
  } catch (error) {
    console.error('Error incrementing view count:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
