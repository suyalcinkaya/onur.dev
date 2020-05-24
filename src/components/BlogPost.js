import Link from 'next/link'
import dayjs from 'dayjs'

// --- Components
import Box from 'components/Box'
import Flex from 'components/Flex'
import Text from 'components/Text'

// --- Others
import theme from 'utils/theme'

const BlogPost = (frontMatter) => {
  const {
    image,
    publishedAt,
    readingTime: { text: readingDuration },
    summary,
    title
  } = frontMatter

  const slug = frontMatter.__resourcePath.split('/').pop().replace('blog/', '').replace('.mdx', '')
  const date = dayjs(publishedAt).format('MMM DD, YYYY')

  return (
    <Link href={`blog/${slug}`} passHref>
      <Box as="a" type="button" mb="3rem" display="block" width="100%">
        <Flex flexDirection={{ _: 'column', md: 'row' }}>
          <Box
            as="img"
            src={image}
            width={300}
            height={{ _: 200, md: 100 }}
            maxWidth={{ _: '100%', md: 160 }}
            borderRadius={6}
            border={`1px solid ${theme.colors.gray300}`}
            loading="lazy"
            css={{ objectFit: 'cover', width: '100%' }}
          />
          <Flex width="100%" flexDirection="column" pl={{ _: 0, md: '1.5rem' }} pt={{ _: '1rem', md: 0 }}>
            <Text fontSize={14} color="gray600">
              {date}
              {' • '}
              {readingDuration}
            </Text>
            <Text
              as="h3"
              fontSize={{ _: 20, md: 18 }}
              fontWeight={500}
              lineHeight={1.43}
              m={0}
              my="0.5rem"
              color="#000"
            >
              {title}
            </Text>
            <Text color="gray700" lineHeight={1.5}>
              {summary}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  )
}

export default BlogPost
