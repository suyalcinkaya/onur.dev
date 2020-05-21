// --- Components
import { BlogPost, Flex, Layout, Text } from 'components'

// --- Articles
import { frontMatter as html5Video } from './blog/html5-video.mdx'
import { frontMatter as reactMemo } from './blog/understanding-react-memo.mdx'

const Home = () => (
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
        {'Hey, I’m Onur Şuyalçınkaya'}
      </Text>
      <Text as="p" lineHeight={1.5}>
        {`I’m an engineer, writer, and DJ living in Istanbul, Turkey.`}
      </Text>
    </Flex>
    <Flex flexDirection="column" mt="3rem">
      <BlogPost {...html5Video} />
      <BlogPost {...reactMemo} />
    </Flex>
  </Layout>
)

/* export async function getStaticProps() {
  const { frontMatter: html5Video } = await import('./blog/html5-video.mdx')
  const { frontMatter: reactMemo } = await import('./blog/understanding-react-memo.mdx')

  return {
    props: {
      popularArticles: [html5Video, reactMemo]
    }
  }
} */

export default Home
