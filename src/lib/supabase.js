import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false
  }
})
export const tableName = 'pages'

export async function getViewCounts() {
  const { data } = await supabase.from(tableName).select('id, slug, view_count')

  return data.map(({ id, slug, view_count }) => ({
    id,
    slug,
    view_count
  }))
}

export async function upsertViewCount(slug) {
  const { data } = await supabase.from(tableName).select('id, view_count').eq('slug', slug)
  const latestData = data[0]

  // Don't upsert view count in development or if no slug is provided
  if (process.env.NODE_ENV !== 'production' || !slug) {
    return { view_count: latestData?.view_count || 0 }
  }

  const { data: newOrUpdatedData } = await supabase
    .from(tableName)
    .upsert({
      id: latestData?.id,
      slug: slug,
      view_count: latestData ? latestData.view_count + 1 : 1,
      view_count_updated_at: new Date()
    })
    .select()

  return {
    view_count: newOrUpdatedData[0]?.view_count || 0
  }
}
