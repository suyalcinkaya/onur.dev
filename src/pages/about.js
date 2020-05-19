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
          fontFamily="Gilroy"
          fontSize={{ _: 32, md: 48 }}
          fontWeight={500}
          letterSpacing="-0.025em"
          color="#000"
          mt={0}
          mb={10}
        >
          About Me
        </Text>
        <Text as="p" lineHeight={1.5}>
          Hey, I'm Onur. I'm a Frontend Engineer living in Istanbul, Turkey where currently a member of Yemeksepeti
          which is the first and biggest online food order company in Turkey.
        </Text>
        <Text as="p" lineHeight={1.5}>
          I'm developing things for{' '}
          <Text
            as="a"
            href="https://yemek.com"
            target="_blank"
            rel="noopener noreferrer"
            color="hsl(208,99%,44%)"
            css={{
              textDecoration: 'none',
              transition: 'all 0.15s ease-out',
              borderBottom: '1px solid transparent',
              '&:hover': {
                borderBottom: '1px solid hsl(208,99%,44%)'
              }
            }}
          >
            yemek.com
          </Text>
          , which is a sub-brand within Yemeksepeti and a platform that is visited by 15M~ unique people monthly and it
          contains recipes, videos, and contents such as fun and instructional subjects related on everything about
          food.
        </Text>
        <Text as="p" lineHeight={1.5}>
          Previously, I worked as a Full Stack Developer at Sistaş, React Native Developer at Tanbula and Specialist at
          Apple. :-)
        </Text>
        <Text as="p" lineHeight={1.5}>
          I grew up in Ankara — the capital city of Turkey — and went to Doğuş University, graduating with a degree in
          Computer Engineering. I spend my free time contributing to open source, DJing, doing bodybuilding, playing
          Football Manager (since 2000), watching my favorite team Beşiktaş's football matches and enjoying time with
          friends and family.
        </Text>
      </Flex>
    </Layout>
  </>
)

export default About
