import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Divider, Heading, Stack, VStack } from '@chakra-ui/react'

// --- Components
import Card from 'components/Card'
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
        <VStack divider={<Divider borderColor="gray.200" />} spacing={8} align="stretch">
          {journeyData.map((data, dataIndex) => (
            <Stack key={`data_${dataIndex}`} spacing={8}>
              <Heading as="h2" size="lg">
                {data.year}
              </Heading>
              <Stack spacing={6}>
                {data.items.map((item, itemIndex) => (
                  <Card key={`journey_${itemIndex}`} title={item.title} secondaryText={item.description} />
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
