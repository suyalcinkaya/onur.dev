import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function incrementViews(slug) {
  const { data: latestData } = await supabase.from('pages').select().eq('slug', slug).single()

  const { data: newOrUpdatedData } = await supabase.from('pages').upsert({
    ...latestData,
    id: latestData?.id,
    slug: slug,
    view_count: latestData ? latestData.view_count + 1 : 1,
    view_count_updated_at: new Date()
  })

  /*   const { data: updatedData } = await supabase
    .from('pages')
    .update({ view_count: latestData.view_count + 1, view_count_updated_at: new Date() })
    .match({ id: latestData.id, slug: latestData.slug }) */

  return {
    likes: newOrUpdatedData[0].like_count,
    views: newOrUpdatedData[0].view_count
  }
}

export async function incrementLikes(slug) {
  const { data: latestData } = await supabase.from('pages').select().eq('slug', slug).single()

  const { data: updatedData } = await supabase
    .from('pages')
    .update({ like_count: latestData.like_count + 1, like_count_updated_at: new Date() })
    .match({ id: latestData.id, slug: latestData.slug })

  return {
    likes: updatedData[0].like_count,
    views: updatedData[0].view_count
  }
}
