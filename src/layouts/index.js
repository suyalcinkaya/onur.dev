import dayjs from 'dayjs'

// --- Components
import { BlogSeo, Box, Flex, Layout as Container, Share, Text } from 'components'

// const editUrl = (slug) => `https://github.com/suyalcinkaya/onur.dev/edit/master/pages/blog/${slug}.mdx`
const discussUrl = (slug) => `https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/blog/${slug}`)}`

const Layout = (frontMatter) => {
  const slug = frontMatter.__resourcePath.split('/').pop().replace('.mdx', '')

  return ({ children }) => {
    return (
      <Container>
        <BlogSeo url={`https://onur.dev/blog/${slug}`} {...frontMatter} />
        <Flex
          as="article"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth={700}
          width="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            width="100%"
            mb={16}
          >
            <Text
              mb={10}
              mt={0}
              as="h1"
              fontFamily="display"
              fontSize={{ _: 32, md: 48 }}
              fontWeight={500}
              letterSpacing="-0.025em"
              color="#000"
            >
              {frontMatter.title}
            </Text>
            <Flex
              flexDirection={{ _: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ _: 'flex-start', md: 'center' }}
              width="100%"
              mt={2}
              mb={10}
              fontSize={14}
            >
              <Flex alignItems="center">
                <Box
                  as="img"
                  src="/static/images/me.jpg"
                  alt="Onur Şuyalçınkaya"
                  height={24}
                  width={24}
                  loading="lazy"
                />
                <Text color="gray800" lineHeight={1.5} ml="0.5rem">
                  {'Onur Şuyalçınkaya'}
                </Text>
              </Flex>
              <Text color="gray600" mt={{ _: '0.5rem', md: 0 }}>
                {dayjs(frontMatter.publishedAt).format('MMMM DD, YYYY')}
                {/* {' / '}({dayjs(frontMatter.publishedAt).fromNow()}) */}
                {' • '}
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
            <Flex justifyContent={{ _: 'flex-start', md: 'flex-end' }} width="100%">
              <Share title={frontMatter.title} url={`https://onur.dev/blog/${slug}`} />
            </Flex>
          </Flex>
          {frontMatter.image && (
            <Box my="2rem">
              <Box
                as="img"
                src={frontMatter.image}
                loading="lazy"
                width={600}
                height="fit-content"
                maxHeight={{ _: 200, md: 400 }}
                width="100%"
              />
            </Box>
          )}
          {children}
          <Box mt={30}>
            <Text
              as="a"
              href={discussUrl(slug)}
              target="_blank"
              color="hsl(208,99%,44%)"
              css={{
                textDecoration: 'none',
                transition: 'all 0.15s ease-out',
                borderBottom: '1px solid transparent',
                '&:hover': {
                  borderBottom: '1px solid hsl(208,99%,44%)'
                }
              }}
            >
              {'Discuss on Twitter'}
            </Text>
            {/* <Text color="gray400">{` • `}</Text>
            <Text
              as="a"
              href={editUrl(slug)}
              target="_blank"
              color="hsl(208,99%,44%)"
              css={{
                textDecoration: 'none',
                transition: 'all 0.15s ease-out',
                borderBottom: '1px solid transparent',
                '&:hover': {
                  borderBottom: '1px solid hsl(208,99%,44%)'
                }
              }}
            >
              {'Edit on GitHub'}
            </Text> */}
          </Box>
        </Flex>
      </Container>
    )
  }
}

export default Layout
