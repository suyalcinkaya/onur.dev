import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
export const tableName = 'pages'

export async function handleViews(slug) {
  const { data } = await supabase.from(tableName).select('id, view_count, like_count').eq('slug', slug)
  const latestData = data[0]

  // Do not upsert to db on development
  if (process.env.NODE_ENV !== 'production') {
    return {
      likes: latestData?.like_count || 0,
      views: latestData?.view_count || 0
    }
  }

  const { data: newOrUpdatedData } = await supabase.from(tableName).upsert({
    id: latestData?.id,
    slug: slug,
    view_count: latestData ? latestData.view_count + 1 : 1,
    view_count_updated_at: new Date()
  })

  return {
    likes: newOrUpdatedData[0].like_count,
    views: newOrUpdatedData[0].view_count
  }

  /* if (latestData) {
    const { data: updatedData } = await supabase
      .from(tableName)
      .update({ view_count: latestData.view_count + 1, view_count_updated_at: new Date() })
      .match({ id: latestData.id, slug: slug })

    return {
      likes: updatedData[0].like_count,
      views: updatedData[0].view_count
    }
  }
  const { data: newData } = await supabase
    .from(tableName)
    .insert([{ slug: slug, view_count: 1, view_count_updated_at: new Date() }])

  return {
    likes: newData[0].like_count,
    views: newData[0].view_count
  } */
}

export async function incrementLikes({ slug, likeAmount = 0 }) {
  const { data: latestData } = await supabase.from(tableName).select().eq('slug', slug).single()

  const { data: updatedData } = await supabase
    .from(tableName)
    .update({ like_count: latestData.like_count + likeAmount, like_count_updated_at: new Date() })
    .match({ id: latestData.id, slug: latestData.slug })

  return {
    likes: updatedData[0].like_count,
    views: updatedData[0].view_count
  }
}
