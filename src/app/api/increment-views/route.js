import supabase from '@/lib/supabase/private'

export async function POST(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  if (!slug) return new Response('Missing slug parameter', { status: 400 })

  try {
    await supabase.rpc('increment_view_count', { page_slug: slug })
    return new Response(JSON.stringify({ message: 'View count incremented successfully' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}
