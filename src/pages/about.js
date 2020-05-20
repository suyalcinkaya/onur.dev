import { NextSeo } from 'next-seo'

// --- Components
import { Flex, Layout, Link, Text } from 'components'

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
          I'm developing things for <Link href="https://yemek.com">yemek.com</Link> -means <strong>food</strong> in
          English-, which is a sub-brand within Yemeksepeti and a platform that is visited by 15M~ unique people monthly
          and contains recipes, videos, and contents such as fun and instructional stuff related on everything about
          food.
        </Text>
        <Text as="p" lineHeight={1.5}>
          Previously, I worked as a Full Stack Developer at Sistaş, React Native Developer at Tanbula and Specialist at
          Apple. :-)
        </Text>
        <Text as="p" lineHeight={1.5}>
          I grew up in Ankara -the capital city of Turkey- and went to Doğuş University, graduating with a degree in
          Computer Engineering. I spend my free time contributing to open source, sharing everything I know through my{' '}
          <Link href="/blog">blog</Link> and <Link href="https://medium.com/@suyalcinkaya">Medium</Link>, DJing, doing
          bodybuilding, playing Football Manager (since 2000), watching my favorite team's -Beşiktaş 🦅- football
          matches and enjoying time with friends and family.
        </Text>
      </Flex>
    </Layout>
  </>
)

export default About
