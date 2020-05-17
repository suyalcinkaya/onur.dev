import { NextSeo } from 'next-seo'
import Link from 'next/link'

// --- Components
import { Flex, Layout, Text } from 'components'

const url = 'https://leerob.io/about'
const title = 'About Me – Lee Robinson'

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
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        <Text
          as="h1"
          fontSize={{ _: '2.25rem', md: '2.5rem' }}
          fontWeight={500}
          lineHeight={1.25}
          color="#000"
          letterSpacing="-0.02em"
          mt={0}
          mb={10}
        >
          About Me
        </Text>
        <Text as="p" lineHeight={1.5}>
          {`I'm Onur, a Frontend Developer residing in Istanbul, Turkey where currently a member of Yemeksepeti and
          working on Yemek.com`}
        </Text>
        <Text as="p" lineHeight={1.5}>
          I am a software developer who dabbles in UI design with a strong sense of aesthetics and a passion for Java
          and modern JavaScript — client and server-side — including React, Redux, React Native, AngularJS, Vue, Next.js
          and Node.js.
        </Text>
        <Text as="p" lineHeight={1.5}>
          I share everything I know about making awesome software through my{' '}
          <Link href="/blog">
            <a>blog</a>
          </Link>
          .
        </Text>
        <Text as="p" lineHeight={1.5}>
          {`I love user experience design that helps people to live better.`}
        </Text>
      </Flex>
    </Layout>
  </>
)

export default About
