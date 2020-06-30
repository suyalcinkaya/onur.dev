import NextLink from 'next/link'
import { Heading, Stack, Text } from '@chakra-ui/core'
import dayjs from 'dayjs'

const BlogPost = (frontMatter) => {
  const {
    // image,
    publishedAt,
    readingTime: { text: readingDuration },
    // summary,
    title
  } = frontMatter

  const slug = frontMatter.__resourcePath.split('/').pop().replace('blog/', '').replace('.mdx', '')
  const date = dayjs(publishedAt).format('MMM DD, YYYY')

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <a>
        <Stack spacing={1}>
          <Heading as="h3" fontSize="lg" fontWeight="medium">
            {title}
          </Heading>
          {/* <Text color={systemTheme === 'light' ? 'gray.600' : 'gray.500'} mb={2}>
            {summary}
          </Text> */}
          <Text fontSize="sm" color="gray.400">
            {date}
            {' • '}
            {readingDuration}
          </Text>
        </Stack>
      </a>
    </NextLink>
  )
}

export default BlogPost
