import { NextSeo } from 'next-seo'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { journeyData } from 'lib/constants'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/journey'
const title = 'Journey — Onur Şuyalçınkaya'

const Journey = () => (
  <>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title,
        images: [
          {
            url: ogImageUrl('**Journey**'),
            alt: title
          }
        ]
      }}
    />
    <Layout>
      <PageHeading heading="Journey" />
      <div className="flex flex-col space-y-10 items-stretch">
        {journeyData.map((data, dataIndex) => (
          <div key={`data_${dataIndex}`} className="space-y-8">
            <div className="flex items-center mt-4 mb-8">
              <h2 className="text-2xl font-bold">{data.year}</h2>
              <hr className="border-dashed border-gray-600 flex-1 ml-4 my-0" />
            </div>
            <section>
              {data.items.map((item, itemIndex) => (
                <div key={`journey_${itemIndex}`} className="flex relative pb-8 last:pb-0">
                  {itemIndex !== data.items.length - 1 && (
                    <div className="w-10 absolute inset-x-0 inset-y-1 mt-10 flex items-center justify-center">
                      <div className="border-l border-dashed border-gray-600 h-full w-px pointer-events-none"></div>
                    </div>
                  )}
                  <div className="flex items-center justify-center align-middle flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full z-0">
                    <span role="img" aria-label={item.title}>
                      {item.emoji}
                    </span>
                  </div>
                  <div className="flex-grow pl-4">
                    <Card title={item.title} secondaryText={item.description} />
                  </div>
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </Layout>
  </>
)

export default Journey
