import { NextSeo } from 'next-seo'
import { Flex, Grid, Heading, Image, Text, Stack } from '@chakra-ui/core'

// --- Components
import { Layout, Link, MusicCard } from 'components'

// --- others
import { popularMixtapes } from 'constant'

const url = 'https://onur.dev/about'
const title = 'About Me — Onur Şuyalçınkaya'

const About = () => (
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
          About Me
        </Heading>
        <Grid gridTemplateColumns={{ _: '1fr', md: 'repeat(2, 1fr)' }} gridGap="2rem" my="1rem">
          <Image src="images/me.webp" loading="lazy" htmlWidth={400} />
          <Stack spacing={4}>
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
                Heycar
              </Link>
              {`.`}
            </Text>
            <Text>
              Previously, I worked as a Frontend Engineer at Yemeksepeti, Full Stack Developer at Sistas, Mobile
              Developer at Tanbula and Specialist at Apple.
            </Text>
            <Text>
              I grew up in Ankara—the capital city of Turkey—and went to Doğuş University, graduating with a degree in
              Computer Engineering. I spend my free time contributing to open source, sharing everything I know through
              my <Link href="/">blog</Link> and <Link href="https://medium.com/@suyalcinkaya">Medium</Link>,{' '}
              <Link href="https://soundcloud.com/jagerman">DJing</Link>, doing bodybuilding, playing Football
              Manager—since 2000—, watching my favorite team's—Besiktas 🦅— football matches and enjoying time with
              friends and family.
            </Text>
          </Stack>
        </Grid>
        <Stack spacing={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" letterSpacing={-0.4}>
              Popular Mixtapes
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
            {popularMixtapes.map((mixtape, mixtapeId) => (
              <MusicCard key={`mixtape_${mixtapeId}`} {...mixtape} />
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Layout>
  </>
)

export default About
