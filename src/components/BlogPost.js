import Link from 'next/link'

import Box from 'components/Box'
import Text from 'components/Text'

const BlogPost = (frontMatter) => {
  const {
    title,
    summary,
    readingTime: { text }
  } = frontMatter

  const slug = frontMatter.__resourcePath.split('/').pop().replace('blog/', '').replace('.mdx', '')

  return (
    <Link href={`blog/${slug}`} passHref>
      <Box as="a" type="button" mb={12} display="block" width="100%">
        <Box display="flex" width="100%" justifyContent="space-between" flexDirection="column">
          <Text as="h3" mb={6} fontWeight={400} color="#000">
            {title}
          </Text>
          <Text color="gray500" mb={12}>
            {text}
          </Text>
          <Text color="gray700">{summary}</Text>
        </Box>
      </Box>
    </Link>
  )
}

export default BlogPost
