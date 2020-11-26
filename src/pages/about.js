import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Button, Flex, Grid, Heading, Text, Stack } from '@chakra-ui/react'

// --- Components
import Layout from 'components/Layout'
import Link from 'components/Link'
import MusicCard from 'components/MusicCard'
import PageHeading from 'components/PageHeading'

// --- Others
import { mixtapes } from 'utils/constants'
import { ogImageUrl } from 'utils/helper'

const url = 'https://onur.dev/about'
const title = 'About Me — Onur Şuyalçınkaya'
const ogTitle = 'About Me'

const About = () => (
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
        <PageHeading>About Me</PageHeading>
        <Stack spacing={4} fontSize="lg">
          <Text>
            I'm Onur, a <Link href="https://www.linkedin.com/in/onursuyalcinkaya/">Frontend Engineer</Link> who dabbles
            in design with a strong sense of aesthetics. Currently living in Berlin, Germany and developing things at{' '}
            <Link href="https://hey.car">heycar</Link>
            {`.`}
          </Text>
          <Text>
            Previously, I worked as a Frontend Engineer at Yemeksepeti, Full Stack Developer at Sistas, Mobile Developer
            at Tanbula and Specialist at Apple.
          </Text>
          <Text>
            I was born in in Ankara—the capital city of Turkey—, grew up in Istanbul and went to Doğuş University,
            graduating with a degree in Computer Engineering. I'm contributing to open source, sharing everything I know
            through my <Link href="/">blog</Link> and <Link href="https://medium.com/@suyalcinkaya">Medium</Link>. When
            I’m not nerding out, I'm <Link href="https://soundcloud.com/jagerman">DJing</Link>, doing bodybuilding,
            playing Football Manager—since 2000—, watching my favorite team's—Besiktas 🦅— football matches and enjoying
            time with friends and family.
          </Text>
        </Stack>
        <Stack spacing={6}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" size="xl" fontSize="3xl">
              Popular Mixtapes
            </Heading>
            <Button
              as="a"
              href="https://soundcloud.com/jagerman"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              rightIcon={<Text>→</Text>}
            >
              See All
            </Button>
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
