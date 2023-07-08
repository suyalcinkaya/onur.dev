import { NextResponse } from 'next/server'

export async function GET(request) {
  const queryParams = request.nextUrl.searchParams
  return NextResponse.json({ queryParams }, { status: 200 })
}
