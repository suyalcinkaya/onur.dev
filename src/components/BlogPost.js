import Link from 'next/link'

import Box from 'components/Box'
import Text from 'components/Text'

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter

  const slug = frontMatter.__resourcePath.replace('blog/', '').replace('.mdx', '')

  return (
    <Link href={`blog/${slug}`} passHref>
      <Box mb={8} display="block" width="100%">
        <Box
          display="flex"
          width="100%"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection={{ _: 'column', md: 'row' }}
        >
          <Text size="md" as="h3" mb={2} fontWeight="medium">
            {title}
          </Text>
        </Box>
        <Text color="gray500">{summary}</Text>
      </Box>
    </Link>
  )
}

export default BlogPost
