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
              letterSpacing="tight"
              mb={10}
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
            >
              <Box display="flex" alignItems="center">
                <img src="/static/me.jpg" alt="Onur Şuyalçınkaya" height={24} width={24} loading="lazy" />
                <Text color="gray800" ml={8}>
                  Onur Şuyalçınkaya
                </Text>
              </Box>
              <Text fontSize={14} color="gray600" mt={{ _: 8, md: 0 }}>
                {dayjs(new Date(frontMatter.publishedAt)).format('MMMM DD, YYYY')}
                {' • '}
                {frontMatter.readingTime.text}
              </Text>
            </Box>
          </Box>
          {children}
          <Box>
            <a href={discussUrl(slug)} target="_blank">
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a href={editUrl(slug)} target="_blank">
              {'Edit on GitHub'}
            </a>
          </Box>
        </Box>
      </Container>
    )
  }
}
