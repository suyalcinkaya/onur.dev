import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Box, Stack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Icons
import BookmarksIcon from 'components/icons/Bookmarks'

// --- Others
import { articlesData, bookmarksData } from 'utils/constants'
import { ogImageUrl } from 'utils/helper'

const url = 'https://onur.dev/bookmarks'
const title = 'Bookmarks — Onur Şuyalçınkaya'

Tab.defaultProps = {
  fontWeight: 'bold',
  color: 'gray.500',
  _selected: { color: 'link', borderColor: 'link' },
  _hover: { color: 'link' }
}

TabPanel.defaultProps = {
  paddingLeft: 0,
  paddingRight: 0
}

const Bookmarks = () => {
  return (
    <Fragment>
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
        <Stack spacing={12}>
          <Stack spacing={8}>
            <PageHeading>
              <Box
                as={BookmarksIcon}
                height={{ base: 10, md: 12 }}
                width={{ base: 10, md: 12 }}
                mr={{ base: 2, md: 4 }}
              />
              Bookmarks
            </PageHeading>
            <p>Internet things, saved for later.</p>
          </Stack>
          <Tabs isFitted isLazy>
            <TabList fontWeight="bold">
              <Tab>All</Tab>
              <Tab _selected={{ color: 'link', borderColor: 'link' }}>Portfolios</Tab>
              <Tab>Reading</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack spacing={8} mt={4}>
                  {[...bookmarksData, ...articlesData].map((bookmark, bookmarkIndex) => (
                    <Card
                      key={`bookmark_${bookmarkIndex}`}
                      title={bookmark.by || bookmark.title}
                      secondaryText={bookmark.category || bookmark.author}
                      // secondaryText={bookmark.notion}
                      url={bookmark.url}
                    />
                  ))}
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack spacing={8} mt={4}>
                  {bookmarksData.map((portfolio, portfolioIndex) => (
                    <Card
                      key={`portfolio_${portfolioIndex}`}
                      title={portfolio.by}
                      secondaryText={portfolio.category}
                      // secondaryText={portfolio.notion}
                      url={portfolio.url}
                    />
                  ))}
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack spacing={8} mt={4}>
                  {articlesData.map((article, articleIndex) => (
                    <Card
                      key={`article_${articleIndex}`}
                      title={article.title}
                      primaryText={article.type}
                      secondaryText={article.author}
                      url={article.url}
                    />
                  ))}
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Layout>
    </Fragment>
  )
}

export default Bookmarks
