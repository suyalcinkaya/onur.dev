import NextLink from 'next/link'
import { Flex, Grid, Heading, Link as ChakraLink, Text, Stack } from '@chakra-ui/core'

// --- Components
import { BlogPost, Link, MusicCard, Layout } from 'components'

// --- Articles
import { frontMatter as blogPosts } from './**/*.mdx' // Thanks to babel-plugin-import-glob-array

const popularMixtapes = [
  {
    title: 'Summer Sax',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0',
    playCount: '9.4M',
    likeCount: '46K'
  },
  {
    title: 'Sax On Fire',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://soundcloud.com/jagerman/saxonfire',
    playCount: '1.36M',
    likeCount: '33.6K'
  },
  {
    title: 'Casablanca',
    description: 'Soulful Deep House Mix',
    url: 'https://soundcloud.com/jagerman/casablanca',
    playCount: '113K',
    likeCount: '2.8K'
  },
  {
    title: 'I Wanna Live Not Just Survive',
    description: 'Deep House Mixtape',
    url: 'https://soundcloud.com/jagerman/i-wanna-live-not-just-survive',
    playCount: '7K',
    likeCount: '290'
  }
]

const Home = () => {
  const sortedBlogPosts = blogPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return (
    <Layout>
      <Stack spacing={12}>
        <Stack spacing={6}>
          <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium" letterSpacing={-1}>
            {'Hey, I’m Onur Şuyalçınkaya'}
          </Heading>
          <Text>
            {`I’m a Software Engineer, Writer, and DJ currently living in Istanbul, Turkey. I develop things on `}
            <Link
              href="https://yemek.com"
              css={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              yemek.com
            </Link>
            {` at Yemeksepeti.`}
          </Text>
          <Text>
            {`I've been writing online since 2018, mostly about web development, tips and tricks.
                In total, I've written ${blogPosts.length} articles on this site.`}
          </Text>
        </Stack>
        <Stack spacing={6}>
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" letterSpacing={-1}>
            Blog Posts
          </Heading>
          <Grid gridGap={6}>
            {sortedBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Grid>
        </Stack>
        <Stack spacing={6}>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" letterSpacing={-1}>
              Popular Mixtapes
            </Heading>
            <ChakraLink
              isExternal
              href="https://soundcloud.com/jagerman"
              css={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none'
                }
              }}
            >
              See All ⟶
            </ChakraLink>
          </Flex>
          <Grid gridGap={6}>
            {popularMixtapes.map((mixtape, mixtapeId) => (
              <MusicCard key={`mixtape_${mixtapeId}`} {...mixtape} />
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Home
