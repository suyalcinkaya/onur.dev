import NextLink from 'next/link'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
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
      <Text color="gray.500">
        <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
      </Text>
      <Box>
        <NextLink href={`/${slug}`}>
          <a>
            <Heading as="h3" fontSize="xl" fontWeight="medium" lineHeight="base">
              {title}
            </Heading>
          </a>
        </NextLink>
      </Box>
      <Text color="gray.500">
        {readingDuration}
      </Text>
    </Stack>
  )
}

export default BlogPost
