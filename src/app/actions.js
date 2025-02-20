'use server'

import { getBookmarkItems } from '@/lib/raindrop'

export async function getBookmarkItemsByPageIndex(id, pageIndex) {
  return await getBookmarkItems(id, pageIndex)
}
