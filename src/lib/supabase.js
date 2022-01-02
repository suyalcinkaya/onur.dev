import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getInitialSupabaseData(slug) {
  let initialSupabaseData = {}

  const { data } = await supabase.from('pages').select().eq('slug', slug).single()
  if (data) {
    initialSupabaseData = {
      likes: data.like_count,
      views: data.view_count + 1
    }
  } else {
    const newDate = new Date()
    const { data: createdData } = await supabase
      .from('pages')
      .insert([{ slug, like_count_updated_at: newDate, view_count_updated_at: newDate }])

    if (createdData) {
      const { like_count, view_count } = createdData[0]

      initialSupabaseData = {
        likes: like_count,
        views: view_count + 1
      }
    }
  }

  return initialSupabaseData
}

export async function incrementViews(slug) {
  const { data: latestData } = await supabase.from('pages').select().eq('slug', slug).single()

  await supabase
    .from('pages')
    .update({ view_count: latestData.view_count + 1, view_count_updated_at: new Date() })
    .match({ id: latestData.id, slug: latestData.slug })
}
