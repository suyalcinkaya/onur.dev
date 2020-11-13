import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Box, Grid, Heading, Text, Stack } from '@chakra-ui/react'

// --- Components
import { Layout } from 'components'

// --- Other
import { journeyData } from 'utils/constants'

const url = 'https://onur.dev/journey'
const title = 'Journey — Onur Şuyalçınkaya'

const Journey = () => (
  <Fragment>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title
      }}
    />
    <Layout>
      <Stack spacing={8}>
        <Heading as="h1" fontSize="5xl" fontWeight="bolder" lineHeight="shorter">
          Journey
        </Heading>
        <Grid gridGap={6}>
          {journeyData.map((data, dataIndex) => (
            <Fragment key={`data_${dataIndex}`}>
              <Grid gap={4}>
                <Heading as="h3" fontSize="2xl">
                  {data.year}
                </Heading>
                <Stack spacing={4}>
                  {data.items.map((item, itemIndex) => (
                    <Stack key={`journey_${itemIndex}`} spacing={1}>
                      <Text fontSize="lg" fontWeight="medium">{item.title}</Text>
                      <Text color="gray.500">{item.description}</Text>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Box bg="gray.200" height="1px" my={4} width="100%" />
            </Fragment>
          ))}
        </Grid>
      </Stack>
    </Layout>
  </Fragment>
)

export default Journey
