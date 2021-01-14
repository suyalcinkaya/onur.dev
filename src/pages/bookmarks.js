import { useState } from 'react'
import { NextSeo } from 'next-seo'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Icons
import BookmarksIcon from 'components/icons/Bookmarks'

// --- Others
import { articlesData, bookmarksData } from 'lib/constants'
import { ogImageUrl } from 'lib/helper'

const url = 'https://onur.dev/bookmarks'
const title = 'Bookmarks — Onur Şuyalçınkaya'

const Bookmarks = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const tabs = ['All', 'Portfolios', 'Reading']

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
        <PageHeading>
          <BookmarksIcon className="h-10 md:h-12 w-10 md:w-12 mr-2 md:mr-4" />
          Bookmarks
        </PageHeading>
        <p>Internet things, saved for later.</p>

        <div className="mt-12">
          <div role="tablist" aria-orientation="horizontal" className="flex flex-start flex-row justify-around">
            {tabs.map((item, itemIndex) => (
              <button
                key={`tabItem_${itemIndex}`}
                className={`flex-1 py-2 px-4 font-semibold border-b-2 outline-none focus:outline-none hover:text-primary-default transition-all duration-200 ${
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
                {[...bookmarksData, ...articlesData].map((bookmark, bookmarkIndex) => (
                  <Card
                    key={`bookmark_${bookmarkIndex}`}
                    title={bookmark.by || bookmark.title}
                    secondaryText={bookmark.category || bookmark.author}
                    // secondaryText={bookmark.notion}
                    url={bookmark.url}
                  />
                ))}
              </div>
            )}
            {activeTabIndex === 1 && (
              <div className="space-y-8 mt-8">
                {bookmarksData.map((portfolio, portfolioIndex) => (
                  <Card
                    key={`portfolio_${portfolioIndex}`}
                    title={portfolio.by}
                    secondaryText={portfolio.category}
                    // secondaryText={portfolio.notion}
                    url={portfolio.url}
                  />
                ))}
              </div>
            )}
            {activeTabIndex === 2 && (
              <div className="space-y-8 mt-8">
                {articlesData.map((article, articleIndex) => (
                  <Card
                    key={`article_${articleIndex}`}
                    title={article.title}
                    primaryText={article.type}
                    secondaryText={article.author}
                    url={article.url}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Bookmarks
