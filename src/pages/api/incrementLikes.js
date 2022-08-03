import { supabase, tableName } from 'lib/supabase'

export default async function incrementLikes(req, res) {
  const { slug } = req.query
  const { data: latestData } = await supabase.from(tableName).select().eq('slug', slug).single()

  const { data: updatedData } = await supabase
    .from(tableName)
    .update({ like_count: latestData.like_count + 1, like_count_updated_at: new Date() })
    .match({ id: latestData.id, slug: latestData.slug })

  return res.status(200).json({
    likes: updatedData[0].like_count,
    views: updatedData[0].view_count
  })
}
