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
        fontSize={{ _: '2.25rem', md: '2.5rem' }}
        fontWeight={500}
        lineHeight={1.25}
        color="#000"
        letterSpacing="-0.02em"
        mt={0}
        mb={10}
      >
        Hey, I’m Onur Şuyalçınkaya
      </Text>
      <Text lineHeight={1.5} color="gray600">
        {`I’m a developer, writer, and creator living in Istanbul, TR. You’ve found my personal slice of the internet – everything you want to know and more is here.`}
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
