import { Suspense } from 'react'

import JourneyCard from '@/components/JourneyCard'
import Markdown from '@/components/Markdown'
import PageTitle from '@/components/PageTitle'
import { getAllLogbook, getPageSeo } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { sharedOpenGraphImage } from '@/app/shared-metadata'

export async function generateMetadata() {
  const seoData = (await getPageSeo('journey')) ?? null
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
          ...sharedOpenGraphImage,
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

async function fetchData() {
  const allLogbook = (await getAllLogbook()) ?? []

  const mappedLogbook = []
  allLogbook.map((log) => {
    const year = new Date(log.date).getFullYear()
    const existingYear = mappedLogbook.find((item) => item?.year === year)

    if (!existingYear) {
      mappedLogbook.push({
        year,
        logs: [log]
      })
    } else {
      existingYear.logs.push(log)
    }
  })

  return { allLogbook: mappedLogbook, headerTitle: 'Journey' }
}

export default async function Journey() {
  const { allLogbook } = await fetchData()

  return (
    <div className="content">
      <PageTitle title="Journey" />
      <Suspense fallback={null}>
        <div className="flex flex-col gap-12 items-stretch">
          {allLogbook.map((item, itemIndex) => (
            <div key={`data_${itemIndex}`} className="flex flex-col gap-6">
              <div className="flex items-center">
                <h2>{item.year}</h2>
                <hr className="border-dashed border-gray-200 flex-1 ml-4 my-0" />
              </div>
              <section>
                {item.logs.map((log, logIndex) => (
                  <div key={`data_${itemIndex}_log_${logIndex}`} className="flex relative pb-8 last:pb-0">
                    {logIndex !== item.logs.length - 1 && (
                      <div className="w-10 absolute inset-x-0 inset-y-2.5 mt-10 flex items-center justify-center">
                        <div className="border-l-2 border-gray-200 h-full w-px pointer-events-none"></div>
                      </div>
                    )}
                    <div className="flex items-center justify-center align-middle flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full z-0">
                      <span role="img" aria-label={log.title}>
                        {log.emoji}
                      </span>
                    </div>
                    <div className="flex-grow pl-4">
                      <JourneyCard title={log.title} subtitle={<Markdown>{log.description}</Markdown>} />
                    </div>
                  </div>
                ))}
              </section>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  )
}
