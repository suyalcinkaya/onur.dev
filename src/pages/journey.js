import { NextSeo } from 'next-seo'
import { Box, Flex, Grid, Heading, Image, Text, Stack } from '@chakra-ui/core'

// --- Components
import { Layout, Link } from 'components'

// -- Constants
import { journeyData } from 'constant'

const url = 'https://onur.dev/journey'
const title = 'Journey — Onur Şuyalçınkaya'

const Journey = () => (
  <>
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
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium" letterSpacing={-0.4}>
          Journey
        </Heading>
        <Grid gridGap={6}>
          {journeyData.map((data, dataIndex) => (
            <Grid key={`data_${dataIndex}`} gap={4}>
              <Text fontSize="xl">{data.year}</Text>
              <Stack spacing={4}>
                {data.items.map((item, itemIndex) => (
                  <Stack key={`journey_${itemIndex}`} spacing={1}>
                    <Text>{item.title}</Text>
                    <Text color="gray.500">{item.description}</Text>
                  </Stack>
                ))}
              </Stack>
              <Box bg="gray.200" height="1px" my={4} width="100%" />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Layout>
  </>
)

export default Journey
