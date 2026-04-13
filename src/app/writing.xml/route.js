import { Feed } from 'feed'

import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts } from '@/lib/utils'

export async function GET() {
  const allPosts = await getAllPosts()
  const sortedPosts = getSortedPosts(allPosts)
  const siteURL = 'https://onur.dev'
  const author = {
    name: 'Onur Şuyalçınkaya',
    link: 'https://onur.dev'
  }

  const latestPost = sortedPosts[0]
  const latestDate = new Date(latestPost?.sys?.publishedAt || '2025-01-01')

  const feed = new Feed({
    title: `Writings RSS feed by ${author.name}`,
    description: 'Stay up to date with my latest writings',
    id: siteURL,
    link: `${siteURL}/writing`,
    language: 'en',
    updated: latestDate,
    copyright: `All rights reserved ${latestDate.getFullYear()}, ${author.name}`,
    author,
    feedLinks: {
      rss2: `${siteURL}/writing/rss.xml`
    }
  })

  sortedPosts.forEach((post) => {
    feed.addItem({
      id: post.slug,
      guid: post.slug,
      title: post.title,
      link: `${siteURL}/writing/${post.slug}`,
      date: new Date(post.date || post.sys.firstPublishedAt),
      updated: new Date(post.sys.publishedAt),
      author: [author],
      contributor: [author]
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400'
    }
  })
}
