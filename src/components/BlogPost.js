import Link from 'next/link'
import dayjs from 'dayjs'

import Box from 'components/Box'
import Text from 'components/Text'

import theme from 'utils/theme'

const BlogPost = (frontMatter) => {
  const {
    title,
    summary,
    image,
    publishedAt,
    readingTime: { text: readingDuration }
  } = frontMatter

  const slug = frontMatter.__resourcePath.split('/').pop().replace('blog/', '').replace('.mdx', '')
  const date = dayjs(publishedAt).format('MMMM DD, YYYY')

  return (
    <Link href={`blog/${slug}`} passHref>
      <Box as="a" type="button" mb="3rem" display="block" width="100%">
        <Box display="flex" flexDirection={{ _: 'column', md: 'row' }}>
          <Box
            as="img"
            src={image}
            width="100%"
            maxWidth={{ _: '100%', md: 160 }}
            borderRadius={6}
            loading="lazy"
            height={{ _: 200, md: 100 }}
            border={`1px solid ${theme.colors.gray300}`}
            css={`
              object-fit: cover;
            `}
          />
          <Box display="flex" width="100%" flexDirection="column" pl={{ _: 0, md: 20 }} pt={{ _: 20, md: 0 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
              <Text as="h3" fontSize={18} fontWeight={500} m={0} color="#000">
                {title}
              </Text>
            </Box>
            <Text fontSize={14} color="gray600" mb={12}>
              {date}
              {' • '}
              {readingDuration}
            </Text>
            <Text color="gray700" lineHeight={1.5}>
              {summary}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default BlogPost
