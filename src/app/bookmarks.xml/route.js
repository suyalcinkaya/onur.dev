import { Feed } from 'feed'

import { getBookmarkItems, getBookmarks } from '@/lib/raindrop'

export async function GET() {
  const bookmarks = await getBookmarks()
  const siteURL = 'https://onur.dev'
  const author = {
    name: 'Onur Şuyalçınkaya',
    link: 'https://onur.dev'
  }

  const allBookmarkItems = await Promise.all(bookmarks.map((bookmark) => getBookmarkItems(bookmark._id)))

  const bookmarkList = allBookmarkItems.flatMap((bookmarkItems) => {
    const { items = [] } = bookmarkItems ?? {}
    return items.slice(0, 10).map((bookmark) => ({
      id: bookmark._id,
      guid: bookmark._id,
      title: bookmark.title,
      link: bookmark.link,
      description: bookmark.excerpt,
      content: bookmark.excerpt,
      image: bookmark.cover,
      date: new Date(bookmark.created),
      updated: new Date(bookmark.lastUpdate),
      author: [author],
      contributor: [author]
    }))
  })

  const sortedBookmarks = bookmarkList.sort(
    (a, b) => new Date(b.updated || b.created) - new Date(a.updated || a.created)
  )

  const latestDate = sortedBookmarks[0]?.updated || sortedBookmarks[0]?.date || new Date('2025-01-01')

  const feed = new Feed({
    title: `Bookmarks RSS feed by ${author.name}`,
    description: 'Stay up to date with my latest selection of various handpicked bookmarks',
    id: siteURL,
    link: `${siteURL}/bookmarks`,
    language: 'en',
    updated: latestDate,
    copyright: `All rights reserved ${latestDate.getFullYear()}, ${author.name}`,
    author,
    feedLinks: {
      rss2: `${siteURL}/bookmarks/rss.xml`
    }
  })

  sortedBookmarks.forEach((bookmark) => {
    feed.addItem({ ...bookmark })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400'
    }
  })
}
