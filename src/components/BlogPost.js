import Link from 'next/link'
import dayjs from 'dayjs'

import Box from 'components/Box'
import Text from 'components/Text'

const BlogPost = (frontMatter) => {
  const {
    title,
    summary,
    publishedAt,
    readingTime: { text: readingDuration }
  } = frontMatter

  const slug = frontMatter.__resourcePath.split('/').pop().replace('blog/', '').replace('.mdx', '')
  const date = dayjs(publishedAt).format('MMMM DD, YYYY')

  return (
    <Link href={`blog/${slug}`} passHref>
      <Box as="a" type="button" mb="3rem" display="block" width="100%">
        <Box display="flex" width="100%" justifyContent="space-between" flexDirection="column">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
            <Text as="h3" fontSize={18} fontWeight={400} m={0} color="#000">
              {title}
            </Text>
          </Box>
          <Text fontSize={14} color="gray600" mb={12}>
            {date}
            {' • '}
            {readingDuration}
          </Text>
          <Text color="gray600" lineHeight={1.5}>
            {summary}
          </Text>
        </Box>
      </Box>
    </Link>
  )
}

export default BlogPost
