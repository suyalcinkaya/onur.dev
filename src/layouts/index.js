import dayjs from 'dayjs'

import { BlogSeo, Box, Layout as Container, Text } from 'components'

const editUrl = (slug) => `https://github.com/suyalcinkaya/onur.dev/edit/master/pages/blog/${slug}.mdx`
const discussUrl = (slug) => `https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/blog/${slug}`)}`

export default function Layout(frontMatter) {
  const slug = frontMatter.__resourcePath.split('/').pop().replace('.mdx', '')

  return ({ children }) => {
    return (
      <Container>
        <BlogSeo url={`https://onur.dev/blog/${slug}`} {...frontMatter} />
        <Box
          as="article"
          p={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth={700}
          width="100%"
        >
          <Box
            display="flex"
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
              fontSize={{ _: 32, md: 48 }}
              fontWeight={400}
              letterSpacing="-0.025em"
              color="#000"
            >
              {frontMatter.title}
            </Text>
            <Box
              display="flex"
              flexDirection={{ _: 'column', md: 'row' }}
              justifyContent="space-between"
              mt={2}
              width="100%"
              mb={4}
              fontSize={14}
            >
              <Box display="flex" alignItems="center">
                <img src="/static/images/me.jpg" alt="Onur Şuyalçınkaya" height={24} width={24} loading="lazy" />
                <Text color="gray800" ml={8}>
                  Onur Şuyalçınkaya
                </Text>
              </Box>
              <Text color="gray600" mt={{ _: 8, md: 0 }}>
                {dayjs(frontMatter.publishedAt).format('MMMM DD, YYYY')}
                {' • '}
                {frontMatter.readingTime.text}
              </Text>
            </Box>
          </Box>
          {frontMatter.image && (
            <Box>
              <Box
                as="img"
                src={frontMatter.image}
                loading="lazy"
                maxHeight={{ _: 240, md: 400 }}
                width="100%"
                my={{ _: '1rem', md: '2rem' }}
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
            <Text color="gray400">{` • `}</Text>
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
            </Text>
          </Box>
        </Box>
      </Container>
    )
  }
}
