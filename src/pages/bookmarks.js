import { useState } from 'react'
import { NextSeo } from 'next-seo'
// import tinytime from 'tinytime'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Icons
// import BookmarksIcon from 'components/icons/Bookmarks'

// --- Others
import { raindropCollectionIDs } from 'lib/constants'
import getBookmarks from 'lib/raindrop'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/bookmarks'
const title = 'Bookmarks — Onur Şuyalçınkaya'

const Bookmarks = ({ all, reading, personalSites, tweets }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const tabs = ['All', 'Reading', 'Personal Sites', 'Tweets']

  console.log('all :>> ', all)
  console.log('reading :>> ', reading)
  console.log('personalSites :>> ', personalSites)
  console.log('tweets :>> ', tweets)

  const rtf = new Intl.RelativeTimeFormat('en', {
    style: 'long',
    numeric: 'auto'
  })

  const diffByDays = (from) => {
    const date = new Date(from)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))
    console.log('diffDays :>> ', diffDays)
    return rtf.format(diffDays * -1, 'days')
  }

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          images: [
            {
              url: ogImageUrl('**Bookmarks**'),
              alt: title
            }
          ]
        }}
      />
      <Layout>
        <PageHeading heading="Bookmarks" description="Internet things, saved for later." />
        <div>
          <div role="tablist" aria-orientation="horizontal" className="flex flex-start flex-row justify-around">
            {tabs.map((item, itemIndex) => (
              <button
                key={`tabItem_${itemIndex}`}
                className={`flex-1 py-2 px-4 font-semibold border-b-2 outline-none focus:outline-none hover:text-primary-default transition-colors duration-200 ${
                  itemIndex === activeTabIndex ? 'text-primary-default border-primary-default' : 'text-gray-600'
                }`}
                onClick={() => itemIndex !== activeTabIndex && setActiveTabIndex(itemIndex)}
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            {activeTabIndex === 0 && (
              <div className="space-y-8 mt-8">
                {all?.length &&
                  all.map((item, itemIndex) => (
                    <Card
                      key={`item_${itemIndex}`}
                      title={item.title}
                      // secondaryText={item.category || item.author}
                      // secondaryText={item.notion}
                      url={item.link}
                    />
                  ))}
              </div>
            )}
            {activeTabIndex === 1 && (
              <div className="space-y-6 mt-6 divide divide-y-2">
                {reading.map((readingItem, readingItemIndex) => (
                  <div key={`readingItem_${readingItemIndex}`} className="first:pt-0 pt-6">
                    <Card
                      title={readingItem.title}
                      // primaryText={readingItem.domain}
                      primaryText={diffByDays(readingItem.created)}
                      // secondaryText={readingItem.excerpt}
                      secondaryText={readingItem.domain}
                      url={readingItem.link}
                    />
                  </div>
                ))}
              </div>
            )}
            {activeTabIndex === 2 && (
              <div className="space-y-6 mt-6 divide divide-y-2">
                {personalSites.map((personalSite, personalSiteIndex) => (
                  <div key={`personalSite_${personalSiteIndex}`} className="first:pt-0 pt-6">
                    <Card
                      title={personalSite.domain}
                      primaryText={diffByDays(personalSite.created)}
                      secondaryText={personalSite.excerpt}
                      url={personalSite.link}
                    />
                  </div>
                ))}
              </div>
            )}
            {activeTabIndex === 3 && (
              <div className="space-y-8 mt-8">
                {tweets.map((tweet, tweetIndex) => (
                  <Card key={`tweet_${tweetIndex}`} title={tweet.excerpt} url={tweet.link} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getBookmarks()

  /* const dataGroupByDay = groupBy(data, (item) => {
    return format(parseISO(item.created), 'd MMMM yyyy', { locale: tr })
  }) */

  const readingItems = data.items.filter((item) => item.collectionId === raindropCollectionIDs.reading)
  const personalSitesItems = data.items.filter((item) => item.collectionId === raindropCollectionIDs.personalSites)
  const tweetsItems = data.items.filter((item) => item.collectionId === raindropCollectionIDs.tweets)

  const all = [...readingItems, ...personalSitesItems, ...tweetsItems].sort(
    (a, b) => Number(new Date(b.created)) - Number(new Date(a.created))
  )

  return {
    props: {
      all,
      reading: readingItems,
      personalSites: personalSitesItems,
      tweets: tweetsItems
    },
    revalidate: 600
  }
}

export default Bookmarks
