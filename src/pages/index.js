import { Grid, Heading, Text, Stack } from '@chakra-ui/core'

// --- Components
import { BlogPost, Layout } from 'components'

// --- Other
import { frontMatter as blogPosts } from './**/*.mdx' // Thanks to babel-plugin-import-glob-array

const Home = () => {
  const sortedBlogPosts = blogPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return (
    <Layout>
      <Stack spacing={8}>
        <Stack spacing={8}>
          <Heading as="h1" fontSize="5xl" fontWeight="bolder" lineHeight="shorter">
            {'Hey, I’m Onur Suyalcinkaya'}
          </Heading>
          <Text fontSize="lg">
            {`Frontend Engineer, JavaScript enthusiast, DJ, writer and minimalist. Currently living in Berlin, Germany and developing things at heycar. Writing mostly about code and design and a bit of my thoughts.`}
          </Text>
        </Stack>
        <Grid gridGap={12}>
          {sortedBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Grid>
      </Stack>
    </Layout>
  )
}

export default Home
