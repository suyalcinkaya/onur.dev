import { NextResponse } from 'next/server'
import { supabase, tableName } from '@/lib/supabase'

export const runtime = 'edge'

export async function GET() {
  const { data } = await supabase.from(tableName).select('slug, view_count')
  return NextResponse.json(data)
}
