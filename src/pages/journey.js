import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Divider, Heading, Text, Stack, VStack } from '@chakra-ui/react'

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
        <VStack divider={<Divider borderColor="gray.200" />} spacing={6} align="stretch">
          {journeyData.map((data, dataIndex) => (
            <Stack key={`data_${dataIndex}`} spacing={4}>
              <Heading as="h2" size="lg">
                {data.year}
              </Heading>
              <Stack spacing={4}>
                {data.items.map((item, itemIndex) => (
                  <Stack key={`journey_${itemIndex}`} spacing={1}>
                    <Heading as="h3" fontSize="lg">
                      {item.title}
                    </Heading>
                    <Text color="gray.500">{item.description}</Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          ))}
        </VStack>
      </Stack>
    </Layout>
  </Fragment>
)

export default Journey
