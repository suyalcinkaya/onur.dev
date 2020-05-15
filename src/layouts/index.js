import dayjs from 'dayjs'

import { BlogSeo, Box, Text } from 'components'

const editUrl = (slug) =>
  `https://github.com/suyalcinkaya/onur.dev/edit/master/pages/blog/${slug}.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://onur.dev/blog/${slug}`)}`

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath.split('/').pop().replace('.mdx', '')

  return ({ children }) => {
    return (
      <Box>
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
          w="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Text letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Text>
            <Box
              display="flex"
              justify="space-between"
              align={{ _: 'initial', md_: 'center' }}
              direction={{ _: 'column', md: 'row' }}
              mt={2}
              w="100%"
              mb={4}
            >
              <Box display="flex" alignItems="center">
                <img
                  src="/static/me.jpg"
                  alt="Onur Şuyalçınkaya"
                  height={24}
                  width={24}
                  loading="lazy"
                />
                <Text fontSize="sm">
                  {'Onur Şuyalçınkaya / '}
                  {dayjs(new Date(frontMatter.publishedAt)).format('MMMM dd, yyyy')}
                </Text>
              </Box>
              <Text fontSize="sm" color="gray500" minWidth={100} mt={[2, 0]}>
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
      </Box>
    )
  }
}
