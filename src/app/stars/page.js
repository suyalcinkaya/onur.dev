import PageTitle from '@/app/_components/PageTitle'
import { getPageSeo } from '@/lib/contentful'
import { getStarredRepos } from '@/lib/github'
import { getOgImageUrl } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

export default async function Stars() {
  const { repos } = await fetchData()

  const chunk1of2 = []
  const chunk2of2 = []
  repos.forEach((element, index) => {
    if (index % 2 === 0) {
      chunk1of2.push(element)
    } else {
      chunk2of2.push(element)
    }
  })
  const chunks = [[...chunk1of2], [...chunk2of2]]

  return (
    <div className="content-wrapper">
      <div className="content @container">
        <PageTitle title="Stars" />
        <div className="grid gap-4 @lg:grid-cols-2">
          {chunks.map((chunk, chunkIndex) => {
            return (
              <div key={`chunk_${chunkIndex}`} className="space-y-4">
                {chunk.map((repo) => {
                  return (
                    <a
                      key={repo.id}
                      className="flex min-w-0 cursor-pointer rounded-lg border border-gray-200 p-4 shadow-sm transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-col gap-2">
                        <h3>{repo.name}</h3>
                        <span>{repo.owner.login}</span>
                        <span className="line-clamp-6 text-sm">{repo.description}</span>
                        {repo.topics && (
                          <div className="flex flex-wrap gap-2">
                            {repo.topics.map((topic) => {
                              return (
                                <span key={topic} className="rounded bg-gray-100 px-2 py-1 text-xs">
                                  {topic}
                                </span>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    </a>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

async function fetchData() {
  const repos = (await getStarredRepos()) ?? []
  return { repos }
}

export async function generateMetadata() {
  const seoData = (await getPageSeo('stars')) ?? null
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
