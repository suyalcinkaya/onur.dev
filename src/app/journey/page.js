import { Suspense } from 'react'

import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { JourneyCard } from '@/components/journey-card'
import { PageTitle } from '@/components/page-title'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { ScrollArea } from '@/components/scroll-area'
import { getAllLogbook, getPageSeo } from '@/lib/contentful'

async function fetchData() {
  const allLogbook = await getAllLogbook()

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
  const { allLogbook } = await fetchData()

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Journey" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Journey" />
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <div className="flex flex-col items-stretch gap-12">
              {allLogbook.map((item, itemIndex) => (
                <div key={`data_${itemIndex}`} className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                  <h2>{item.year}</h2>
                  <section>
                    {item.logs.map((log, logIndex) => (
                      <div key={`data_${itemIndex}_log_${logIndex}`} className="relative flex pb-8 last:pb-0">
                        {logIndex !== item.logs.length - 1 && (
                          <div className="absolute inset-0 flex w-5 items-center justify-center">
                            <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                          </div>
                        )}
                        <div className="z-0 grid size-5 shrink-0 place-items-center rounded-full border bg-white text-white shadow-xs">
                          <div className="size-2 rounded-full bg-blue-600" />
                        </div>
                        <div className="grow pl-4 lg:pl-8">
                          <JourneyCard {...log} index={logIndex} />
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}

export async function generateMetadata() {
  const seoData = await getPageSeo('journey')
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = '/journey'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
