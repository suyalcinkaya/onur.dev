import { NextResponse } from 'next/server'
import { supabase, tableName } from '@/lib/supabase'

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');


  // const { slug } = req.query
  const { data } = await supabase.from(tableName).select('id, view_count, like_count').eq('slug', slug)
  const latestData = data[0]

  // Upsert to db only on production
  if (process.env.NODE_ENV === 'production') {
    const { data: newOrUpdatedData } = await supabase.from(tableName).upsert({
      id: latestData?.id,
      slug: slug,
      view_count: latestData ? latestData.view_count + 1 : 1,
      view_count_updated_at: new Date()
    })

    return NextResponse.json({
      likes: newOrUpdatedData[0].like_count,
      views: newOrUpdatedData[0].view_count
    })
  }

  return NextResponse.json({
    likes: latestData?.like_count || 0,
    views: latestData?.view_count || 0
  })
}
