import Link from 'next/link'

// --- Components
import { BlogPost, Box, Flex, MusicCard, Layout, Text } from 'components'

// --- Articles
import { frontMatter as useFetch } from './blog/useFetch-react-hook.mdx'
import { frontMatter as html5Video } from './blog/html5-video.mdx'
import { frontMatter as reactMemo } from './blog/understanding-react-memo.mdx'

const popularMixtapes = [
  {
    title: 'Summer Sax',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0',
    imageUrl: 'https://i1.sndcdn.com/artworks-000145200920-plq49s-t500x500.jpg',
    playCount: '9.4M',
    likeCount: '46K'
  },
  {
    title: 'Sax On Fire',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://soundcloud.com/jagerman/saxonfire',
    imageUrl: 'https://i1.sndcdn.com/artworks-000145200947-x75uby-t500x500.jpg',
    playCount: '1.36M',
    likeCount: '33.6K'
  },
  {
    title: 'Casablanca',
    description: 'Soulful Deep House Mix',
    url: 'https://soundcloud.com/jagerman/casablanca',
    imageUrl: 'https://i1.sndcdn.com/artworks-000145201020-72yys4-t500x500.jpg',
    playCount: '113K',
    likeCount: '2.8K'
  }
]

const Home = () => (
  <Layout>
    <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
      <Text
        as="h1"
        fontFamily="display"
        fontSize={{ _: 32, md: 48 }}
        fontWeight={500}
        letterSpacing="-0.025em"
        // color="#000"
        mt={0}
        mb={10}
      >
        {'Hey, I’m Onur Şuyalçınkaya'}
      </Text>
      <Text as="p">{`I’m a developer, writer, and DJ living in Istanbul, Turkey.`}</Text>
    </Flex>
    <Flex justifyContent="space-between" alignItems="center" mt="2rem" mb="2rem">
      <Text as="h2" m={0} fontFamily="display" fontWeight={500}>
        Latest Posts
      </Text>
      <Link href="/blog" passHref>
        <Text as="a">{'See All ⟶'}</Text>
      </Link>
    </Flex>
    <Flex flexDirection="column">
      <BlogPost {...useFetch} />
      <BlogPost {...reactMemo} />
      <BlogPost {...html5Video} />
    </Flex>
    <Flex justifyContent="space-between" alignItems="center" mt="2rem" mb="2rem">
      <Text as="h2" m={0} fontFamily="display" fontWeight={500}>
        Popular Mixtapes
      </Text>
      <Text as="a" target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/jagerman">
        {'See All ⟶'}
      </Text>
    </Flex>
    <Flex flexDirection="column">
      {popularMixtapes.map((mixtape, mixtapeId) => (
        <Box key={`mixtape_${mixtapeId}`} mb="2rem">
          <MusicCard {...mixtape} />
        </Box>
      ))}
    </Flex>
  </Layout>
)

export default Home
