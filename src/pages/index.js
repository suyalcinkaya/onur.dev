// --- Components
import { BlogPost, Box, Flex, Layout, Text } from 'components'

// --- Articles
import { frontMatter as useFetch } from './blog/useFetch-react-hook.mdx'
import { frontMatter as html5Video } from './blog/html5-video.mdx'
import { frontMatter as reactMemo } from './blog/understanding-react-memo.mdx'

const mixtapeIDs = ['145806916', '231063912', '127328853']

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
        {`I’m a developer, writer, and DJ living in Istanbul, Turkey.`}
      </Text>
    </Flex>
    <Text as="h2" fontFamily="Gilroy" fontWeight={500}>
      Latest Posts
    </Text>
    <Flex flexDirection="column">
      <BlogPost {...useFetch} />
      <BlogPost {...reactMemo} />
      <BlogPost {...html5Video} />
    </Flex>
    <Text as="h2" fontFamily="Gilroy" fontWeight={500}>
      Popular Mixtapes
    </Text>
    <Flex flexDirection="column">
      {mixtapeIDs.map((mixtape, mixtapeId) => (
        <Box key={`mixtape_${mixtapeId}`} mb="2rem">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${mixtape}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          />
        </Box>
      ))}
    </Flex>
  </Layout>
)

export default Home
