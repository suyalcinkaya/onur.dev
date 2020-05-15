import { NextSeo } from 'next-seo'

import { frontMatter as blogPosts } from './blog/**/*.mdx'
import { Box, BlogPost, Text } from 'components'

const url = 'https://onur.dev/blog'
const title = 'Blog – Onur Şuyalçınkaya'
const description =
  'Thoughts on the software industry, programming, tech, music, and my personal life.'

const Blog = () => {
  if (!blogPosts) return null

  const sortedBlogPosts = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Box>
        <Box
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth={700}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Text letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Text>
            <Text color="gray500">
              {`I've been writing online since 2014, mostly about web development and tech careers.
                In total, I've written ${blogPosts.length} articles on this site.
                Use the search below to filter by title.`}
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth={700}
            mt={8}
          >
            <Text as="h2" letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              All Posts
            </Text>
            {sortedBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Blog
