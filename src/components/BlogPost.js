import NextLink from 'next/link'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import tinytime from 'tinytime'

const BlogPost = (frontMatter) => {
  const {
    publishedAt,
    readingTime: { text: readingDuration },
    summary,
    title
  } = frontMatter

  const pathFiles = frontMatter.__resourcePath.split('/')
  const slug = pathFiles[pathFiles.length - 2]

  return (
    <Stack
      as="article"
      spacing={1}
      transition={{ md: 'background 200ms ease-in-out' }}
      _hover={{ md: { bg: 'gray.100' } }}
      p={{ md: 4 }}
      m={{ md: -4 }}
      rounded={{ md: 'normal' }}
      cursor={{ md: 'pointer' }}
    >
      <Stack isInline spacing={1} color="gray.500">
        <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
        <span>&bull;</span>
        <span>{readingDuration}</span>
      </Stack>
      <Box>
        <NextLink href={`/${slug}`}>
          <a>
            <Heading as="h3" fontSize="xl" fontWeight="medium" lineHeight="base">
              {title}
            </Heading>
          </a>
        </NextLink>
      </Box>
      <Text color="gray.500">{summary}</Text>
    </Stack>
  )
}

export default BlogPost
