import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Box, Heading, Text, Stack } from '@chakra-ui/react'

// --- Components
import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'

// --- Other
import { journeyData } from 'utils/constants'
import { ogImageUrl } from 'utils/helper'

const url = 'https://onur.dev/journey'
const title = 'Journey — Onur Şuyalçınkaya'
const ogTitle = 'Journey'

const Journey = () => (
  <Fragment>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title,
        images: [
          {
            url: ogImageUrl(ogTitle),
            alt: title
          }
        ]
      }}
    />
    <Layout>
      <Stack spacing={8}>
        <PageHeading>Journey</PageHeading>
        <Stack spacing={6}>
          {journeyData.map((data, dataIndex) => (
            <Fragment key={`data_${dataIndex}`}>
              <Stack spacing={4}>
                <Heading as="h2" size="xl" fontSize="3xl">
                  {data.year}
                </Heading>
                <Stack spacing={4}>
                  {data.items.map((item, itemIndex) => (
                    <Stack key={`journey_${itemIndex}`} spacing={1}>
                      <Text fontSize="lg" fontWeight="medium">
                        {item.title}
                      </Text>
                      <Text color="gray.500">{item.description}</Text>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              {dataIndex !== journeyData.length - 1 && <Box bg="gray.200" height="1px" my={4} width="100%" />}
            </Fragment>
          ))}
        </Stack>
      </Stack>
    </Layout>
  </Fragment>
)

export default Journey
