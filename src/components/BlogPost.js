import NextLink from 'next/link'
import { Box, Heading, Stack, Text } from '@chakra-ui/core'
import tinytime from 'tinytime'

const BlogPost = (frontMatter) => {
  const {
    publishedAt,
    readingTime: { text: readingDuration },
    // summary,
    title
  } = frontMatter

  const pathFiles = frontMatter.__resourcePath.split('/')
  const slug = pathFiles[pathFiles.length - 2]

  return (
    <Stack as="article" spacing={1}>
      <Box as={NextLink} href={`/${slug}`}>
        <a>
          <Heading as="h3" fontSize="lg" fontFamily="sans" fontWeight="medium">
            {title}
          </Heading>
        </a>
      </Box>
      {/* <Text color={systemTheme === 'light' ? 'gray.600' : 'gray.500'} mb={2}>
            {summary}
          </Text> */}
      <Text fontSize="sm" color="gray.600">
        <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
        {' • '}
        {readingDuration}
      </Text>
    </Stack>
  )
}

export default BlogPost
