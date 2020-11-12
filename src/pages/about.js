import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Box, Flex, Grid, Heading, Text, Stack } from '@chakra-ui/core'
import Image from 'next/image'

// --- Components
import { Layout, Link, MusicCard } from 'components'

// --- Others
import { mixtapes } from 'utils/constants'

const url = 'https://onur.dev/about'
const title = 'About Me — Onur Şuyalçınkaya'

const About = () => (
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
        <Heading as="h1" size="2xl" fontWeight="bolder" lineHeight="shorter">
          About Me
        </Heading>
        <Stack spacing={4} fontSize="lg">
          <Text>
            {`I'm Onur, a Software Engineer, writer, and DJ who dabbles in design with a strong sense of aesthetics. Currently living
            in Berlin, Germany and developing things at `}
            <Link
              href="https://hey.car"
              css={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              heycar
            </Link>
            {`.`}
          </Text>
          <Text>
            Previously, I worked as a Frontend Engineer at Yemeksepeti, Full Stack Developer at Sistas, Mobile Developer
            at Tanbula and Specialist at Apple.
          </Text>
          <Text>
            I was born in in Ankara—the capital city of Turkey—, grew up in Istanbul and went to Doğuş University,
            graduating with a degree in Computer Engineering. When I’m not nerding out, I'm contributing to open source,
            sharing everything I know through my <Link href="/">blog</Link> and{' '}
            <Link href="https://medium.com/@suyalcinkaya">Medium</Link>,{' '}
            <Link href="https://soundcloud.com/jagerman">DJing</Link>, doing bodybuilding, playing Football
            Manager—since 2000—, watching my favorite team's—Besiktas 🦅— football matches and enjoying time with
            friends and family.
          </Text>
        </Stack>
        <Stack spacing={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" size="lg" fontSize="2xl">
              Popular mixtapes
            </Heading>
            <Link
              isExternal
              href="https://soundcloud.com/jagerman"
              css={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              See All →
            </Link>
          </Flex>
          <Grid gridGap={6}>
            {mixtapes.map((mixtape, mixtapeId) => (
              <MusicCard key={`mixtape_${mixtapeId}`} {...mixtape} />
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Layout>
  </Fragment>
)

export default About
