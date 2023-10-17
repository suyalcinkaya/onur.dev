import { Feed } from 'feed'

import { getCollections, getRaindrops } from '@/lib/raindrop'

export async function GET() {
  const collections = await getCollections()
  const date = new Date()
  const siteURL = 'https://onur.dev'
  const author = {
    name: 'Onur Şuyalçınkaya',
    link: 'https://onur.dev'
  }

  const feed = new Feed({
    title: `Bookmarks RSS feed by ${author.name}`,
    description: 'Stay up to date with my latest selection of various handpicked bookmarks',
    id: siteURL,
    link: `${siteURL}/bookmarks`,
    language: 'en',
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    author,
    feedLinks: {
      rss2: `${siteURL}/bookmarks/rss.xml`
    }
  })

  const bookmarkList = []
  for (const collection of collections) {
    const raindrops = await getRaindrops(collection._id)
    const { items = [] } = raindrops ?? {}

    items?.slice(0, 10).forEach((bookmark) => {
      bookmarkList.push({
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
      })
    })
  }

  const sortedBookmarks = bookmarkList.sort(
    (a, b) => new Date(b.updated || b.created) - new Date(a.updated || a.created)
  )
  sortedBookmarks.forEach((bookmark) => {
    feed.addItem({ ...bookmark })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  })
}
