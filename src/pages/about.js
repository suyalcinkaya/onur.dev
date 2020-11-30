import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import { Avatar, Box, Button, Heading, Stack } from '@chakra-ui/react'

// --- Components
import Card from 'components/Card'
import Layout from 'components/Layout'
import Link from 'components/Link'
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
      <Stack spacing={12}>
        <Stack spacing={8}>
          <PageHeading>About Me</PageHeading>
          <div>
            <Box float="left" width={150} height={140} mt={4} style={{ shapeOutside: 'circle(50%)' }}>
              <Avatar size="2xl" name="Onur Şuyalçınkaya" src="/images/og.jpg" />
            </Box>
            <p>
              I'm Onur, a <Link href="https://www.linkedin.com/in/onursuyalcinkaya/">Frontend Engineer</Link> who loves
              to solve problems and dabbles in design with a strong sense of aesthetics. Currently living in Berlin,
              Germany and developing things at <Link href="https://hey.car">heycar</Link>. Previously, I worked as a
              Frontend Engineer at Yemeksepeti, Full Stack Developer at Sistas, Mobile Developer at Tanbula and
              Specialist at Apple. I was born in in Ankara—the capital city of Turkey—, grew up in Istanbul and went to
              Doğuş University, graduating with a degree in Computer Engineering. I'm contributing to open source,
              sharing everything I know through <Link href="/">my blog</Link> and{' '}
              <Link href="https://suyalcinkaya.medium.com">Medium</Link>. When I’m not nerding out, I'm{' '}
              <Link href="https://soundcloud.com/jagerman">DJing</Link>, doing bodybuilding, playing Football Manager
              since 2000, watching Besiktas 🦅 —my favorite team— matches and enjoying time with friends and family.
            </p>
            <br />
            <p>
              You can find me on <Link href="https://twitter.com/onursdev">Twitter</Link> where I talk about code and
              design, or on <Link href="https://github.com/suyalcinkaya/">GitHub</Link> where I’m building cool stuff,
              or on <Link href="https://soundcloud.com/jagerman">Soundcloud</Link> where I’m creating mixtapes and
              songs.
            </p>
          </div>
        </Stack>
        <Stack spacing={6}>
          <Stack isInline align="center" justify="space-between">
            <Heading as="h2" size="lg">
              Popular Mixtapes
            </Heading>
            <Button
              as="a"
              href="https://soundcloud.com/jagerman"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              rightIcon={<span>→</span>}
            >
              See All
            </Button>
          </Stack>
          <Stack spacing={6}>
            {mixtapes.map((mixtape, mixtapeId) => (
              <Card
                key={`mixtape_${mixtapeId}`}
                title={mixtape.title}
                primaryText={
                  <Stack isInline spacing={1}>
                    <span>{mixtape.playCount} plays</span>
                    <span>&bull;</span>
                    <span>{mixtape.likeCount} likes</span>
                  </Stack>
                }
                secondaryText={mixtape.description}
                url={mixtape.url}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  </Fragment>
)

export default About
