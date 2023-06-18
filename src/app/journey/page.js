import { Suspense } from 'react'
import { headers } from 'next/headers'

import JourneyCard from '@/app/_components/JourneyCard'
import Markdown from '@/app/_components/Markdown'
import PageTitle from '@/app/_components/PageTitle'
import { getAllLogbook, getPageSeo, checkPreviewMode } from '@/lib/contentful'
import { getOgImageUrl } from '@/lib/utils'
import { openGraphImage } from '@/app/shared-metadata'

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

async function fetchData(isPreview = false) {
  const allLogbook = (await getAllLogbook(isPreview)) ?? []

  const mappedLogbook = []
  allLogbook.map((log) => {
    const year = new Date(log.date).getFullYear()
    const existingYear = mappedLogbook.find((item) => item?.year === year)

    if (!existingYear) mappedLogbook.push({ year, logs: [log] })
    else existingYear.logs.push(log)
  })

  return { allLogbook: mappedLogbook }
}

export default async function Journey() {
  const headerList = headers()
  const { isPreview } = checkPreviewMode(headerList)
  const { allLogbook } = await fetchData(isPreview)

  return (
    <div className="content">
      {isPreview && (
        <div className="border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-700" role="alert">
          <p className="font-bold">Preview Mode</p>
          <p>Preview mode is enabled. This page is not visible to the public.</p>
        </div>
      )}
      <PageTitle title="Journey" />
      <Suspense fallback={null}>
        <div className="flex flex-col items-stretch gap-12">
          {allLogbook.map((item, itemIndex) => (
            <div key={`data_${itemIndex}`} className="flex flex-col gap-6">
              <div className="flex items-center">
                <h2>{item.year}</h2>
                <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
              </div>
              <section>
                {item.logs.map((log, logIndex) => (
                  <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
                    {logIndex !== item.logs.length - 1 && (
                      <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
                        <div className="pointer-events-none h-full w-px border-l-2 border-gray-200"></div>
                      </div>
                    )}
                    <div className="z-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 align-middle">
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
