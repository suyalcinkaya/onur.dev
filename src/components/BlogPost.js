import Link from 'next/link'
import dayjs from 'dayjs'
import useSWR from 'swr'

// --- Components
import Box from 'components/Box'
import Flex from 'components/Flex'
import Text from 'components/Text'

// --- Others
import theme from 'utils/theme'

const BlogPost = (frontMatter) => {
  const {
    categories,
    image,
    publishedAt,
    readingTime: { text: readingDuration },
    summary,
    title
  } = frontMatter

  const slug = frontMatter.__resourcePath.split('/').pop().replace('blog/', '').replace('.mdx', '')
  const date = dayjs(publishedAt).format('MMM DD, YYYY')
  const cat = categories.split(',')
  const { data } = useSWR(`/api/page-views?id=${slug}`, (url) => fetch(url).then((res) => res.json()))
  const views = data?.total

  return (
    <Link href={`blog/${slug}`} passHref>
      <Box as="a" type="button" mb="3rem" display="block" width="100%">
        <Flex flexDirection={{ _: 'column', md: 'row' }}>
          <Box
            as="img"
            src={image}
            width={300}
            height={{ _: 200, md: 120 }}
            maxWidth={{ _: '100%', md: 180 }}
            borderRadius={6}
            border={`1px solid ${theme.colors.gray300}`}
            loading="lazy"
            css={{ objectFit: 'cover', width: '100%' }}
          />
          <Flex width="100%" flexDirection="column" pl={{ _: 0, md: 20 }} pt={{ _: 20, md: 0 }}>
            <Flex mb="0.5rem">
              {cat.length &&
                cat.map((item, itemIndex) => (
                  <Box
                    key={`category_${itemIndex}`}
                    display="inline-flex"
                    bg="#fdf0ef"
                    p=".25rem .5rem"
                    width="fit-content"
                    borderRadius={6}
                    mr={8}
                  >
                    <Text fontSize={12} letterSpacing="0.02em" color="#383838">
                      {item}
                    </Text>
                  </Box>
                ))}
            </Flex>
            <Text
              as="h3"
              fontSize={{ _: 20, md: 18 }}
              fontWeight={500}
              lineHeight={1.43}
              m={0}
              mb="0.5rem"
              color="#000"
            >
              {title}
            </Text>
            <Text fontSize={14} color="gray600" mb={12}>
              {date}
              {' • '}
              {readingDuration}
              {views && (
                <>
                  {' • '}
                  {views}
                  {' views'}
                </>
              )}
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
