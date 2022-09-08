import { supabase, tableName } from 'lib/supabase'

export default async function handleViews(req, res) {
  const { slug } = req.query
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

    return res.status(200).json({
      likes: newOrUpdatedData[0].like_count,
      views: newOrUpdatedData[0].view_count
    })
  }

  return res.status(200).json({
    likes: latestData?.like_count || 0,
    views: latestData?.view_count || 0
  })
}
