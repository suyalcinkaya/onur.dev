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
      <Box>
        <NextLink href={`/${slug}`}>
          <a>
            <Heading as="h3" fontSize={{ xl: 'xl' }} fontFamily="sans" fontWeight="medium" lineHeight="base">
              {title}
            </Heading>
          </a>
        </NextLink>
      </Box>
      {/* <Text color={systemTheme === 'light' ? 'gray.600' : 'gray.500'} mb={2}>
            {summary}
          </Text> */}
      <Text fontSize="xs" color="gray.600" lineHeight="shorter">
        <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
        {' • '}
        {readingDuration}
      </Text>
    </Stack>
  )
}

export default BlogPost
