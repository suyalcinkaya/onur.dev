import Link from 'next/link'
import dayjs from 'dayjs'

// --- Components
import Box from 'components/Box'
import Flex from 'components/Flex'
import Text from 'components/Text'

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
      <Box as="a" type="button" mb="3rem" display="block" width="100%">
        <Flex width="100%" flexDirection="column" pt={{ _: '1rem', md: 0 }}>
          <Text fontSize={14} color="gray600">
            {date}
            {' • '}
            {readingDuration}
          </Text>
          <Text as="h3" fontSize={{ _: 20, md: 18 }} fontWeight={500} lineHeight={1.5} m={0} my="0.5rem">
            {title}
          </Text>
          <Text color={colorMode === 'light' ? 'gray700' : 'gray500'} lineHeight={1.5}>
            {summary}
          </Text>
          <Text color={colorMode === 'light' ? 'gray700' : 'gray500'} mt="0.5rem" lineHeight={1.5}>
            {'Read more ⟶'}
          </Text>
        </Flex>
      </Box>
    </Link>
  )
}

export default BlogPost
