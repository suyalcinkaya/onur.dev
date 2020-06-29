import Link from 'next/link'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import dayjs from 'dayjs'

// --- Others
import useColorMode from 'hooks/useColorMode'

const BlogPost = (frontMatter) => {
  const {
    // image,
    publishedAt,
    readingTime: { text: readingDuration },
    summary,
    title
  } = frontMatter

  const { colorMode } = useColorMode()

  const slug = frontMatter.__resourcePath.split('/').pop().replace('blog/', '').replace('.mdx', '')
  const date = dayjs(publishedAt).format('MMM DD, YYYY')

  return (
    <Link href={`blog/${slug}`} passHref>
      <a>
        <Box>
          <Heading as="h3" fontSize="lg" fontWeight="medium" m={0} mb={2}>
            {title}
          </Heading>
          {/* <Text color={colorMode === 'light' ? 'gray.600' : 'gray.500'} mb={2}>
            {summary}
          </Text> */}
          <Text fontSize="sm" color="gray.500">
            {date}
            {' • '}
            {readingDuration}
          </Text>
        </Box>
      </a>
    </Link>
  )
}

export default BlogPost
