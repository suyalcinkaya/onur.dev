import { getAllPageSlugs, getAllPosts } from '@/lib/contentful'
import { getBookmarks } from '@/lib/raindrop'
import { getSortedPosts } from '@/lib/utils'

export default async function sitemap() {
  const [allPosts, bookmarks, allPages] = await Promise.all([getAllPosts(), getBookmarks(), getAllPageSlugs()])

  const sortedWritings = getSortedPosts(allPosts)
  const writings = sortedWritings.map((post) => {
    return {
      url: `https://onur.dev/writing/${post.slug}`,
      lastModified: post.sys.publishedAt,
      changeFrequency: 'yearly',
      priority: 0.5
    }
  })

  const mappedBookmarks = bookmarks.map((bookmark) => {
    return {
      url: `https://onur.dev/bookmarks/${bookmark.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    }
  })

  const pages = allPages.map((page) => {
    let changeFrequency = 'yearly'
    if (['writing', 'journey'].includes(page.slug)) changeFrequency = 'monthly'
    if (['bookmarks'].includes(page.slug)) changeFrequency = 'daily'

    let lastModified = page.sys.publishedAt
    if (['writing', 'journey', 'bookmarks'].includes(page.slug)) lastModified = new Date()

    let priority = 0.5
    if (['writing', 'journey'].includes(page.slug)) priority = 0.8
    if (['bookmarks'].includes(page.slug)) priority = 1

    return {
      url: `https://onur.dev/${page.slug}`,
      lastModified,
      changeFrequency,
      priority
    }
  })

  return [
    {
      url: 'https://onur.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    ...pages,
    ...writings,
    ...mappedBookmarks
  ]
}
