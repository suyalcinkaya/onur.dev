import { NextSeo } from 'next-seo'
import { Heading, Link, Text, Stack } from '@chakra-ui/core'

// --- Components
import { Layout } from 'components'

const url = 'https://onur.dev/about'
const title = 'About Me – Onur Şuyalçınkaya'

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
      <Stack spacing={6}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium" letterSpacing={-1}>
          About Me
        </Heading>
        <Stack spacing={4}>
          <Text>
            Hey, I'm Onur, a Software Engineer who dabbles in design with a strong sense of aesthetics, currently living
            in Istanbul, Turkey where currently developing things on <Link href="https://yemek.com">yemek.com</Link> at{' '}
            <Link href="https://yemek.com">Yemeksepeti</Link>.
          </Text>
          <Text>
            Previously, I worked as a Full Stack Developer at Sistaş, React Native Developer at Tanbula and Specialist
            at Apple.
          </Text>
          <Text>
            I grew up in Ankara—the capital city of Turkey—and went to Doğuş University, graduating with a degree in
            Computer Engineering. I spend my free time contributing to open source, sharing everything I know through my{' '}
            <Link href="/blog">blog</Link> and <Link href="https://medium.com/@suyalcinkaya">Medium</Link>, DJing, doing
            bodybuilding, playing Football Manager (since 2000), watching my favorite team's—Beşiktaş 🦅— football
            matches and enjoying time with friends and family.
          </Text>
        </Stack>
      </Stack>
    </Layout>
  </>
)

export default About
