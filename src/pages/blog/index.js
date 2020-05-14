import Link from 'next/link'
import dayjs from 'dayjs'

// --- Components
import { Box, Layout, Text } from 'components'

// --- Helpers
import getPosts from 'utils/getPosts'

const Blog = ({ posts, ...props }) => (
  <Layout
    title="Blog – Onur Şuyalçınkaya"
    description="Thoughts on the software industry, programming, tech, music, and my personal life."
    {...props}
  >
    <Text as="h1" fontSize={{ _: 28, md: 40 }} fontWeight={500}>
      Blog
    </Text>
    <main>
      {posts &&
        posts.map((post) => {
          return (
            <Box key={post.slug} mb={40}>
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`} passHref>
                <Box as="a" type="button" display="flex" flexDirection="column" color="black">
                  <Text as="h3" fontSize={18} fontWeight={600} mt={0} mb={6}>
                    {post?.frontmatter?.title}
                  </Text>
                  <Text mb={8}>{post?.frontmatter?.description}</Text>
                  <Text fontSize={12} color="gray600">
                    {dayjs(post.frontmatter.date).format('DD MMM, YYYY')}
                  </Text>
                </Box>
              </Link>
            </Box>
          )
        })}
    </main>
  </Layout>
)

export async function getStaticProps() {
  const posts = ((context) => {
    return getPosts(context)
  })(require.context('posts', true, /\.md$/))

  return {
    props: {
      posts
    }
  }
}

export default Blog
