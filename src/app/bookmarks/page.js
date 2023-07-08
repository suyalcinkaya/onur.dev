import PageTitle from '@/app/_components/PageTitle'
import { getPageSeo } from '@/lib/contentful'
import { fetchRaindropBookmarks } from '@/lib/raindrop'
import { getOgImageUrl } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

export const revalidate = 60 * 60 * 24 * 7 // 1 week

async function fetchData() {
  const raindropBookmarks = (await fetchRaindropBookmarks()) ?? []
  return { raindropBookmarks }
}

export default async function Writing() {
  const { raindropBookmarks } = await fetchData()

  return (
    <div className="content-wrapper">
      <div className="content">
        <PageTitle title="Bookmarks" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {raindropBookmarks?.items?.map((bookmark) => {
            console.log('bookmark', bookmark)
            return (
              <a
                key={bookmark._id}
                className="flex cursor-pointer flex-col gap-4 rounded-lg border border-gray-200 p-4 shadow-sm transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100"
                href={bookmark.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bookmark.cover && (
                  <img
                    src={bookmark.cover}
                    alt={bookmark.title}
                    width={300}
                    height={200}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                )}
                <h3 className="line-clamp-2">{bookmark.title}</h3>
                <span className="line-clamp-4 text-sm">{bookmark.excerpt}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata() {
  const seoData = (await getPageSeo('bookmarks')) ?? null
  if (!seoData) return null

  const { title, url, seoTitle, seoDescription } = seoData
  const siteUrl = `/${url}`

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          ...openGraphImage,
          url: getOgImageUrl({ title, url }),
          alt: title
        }
      ],
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
