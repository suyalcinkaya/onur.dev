import { Heading, Stack, Text } from '@chakra-ui/core'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

// --- Components
import { BlogSeo, Box, Layout as LayoutCom, Link, Share } from 'components'

// --- Others
import useColorMode from 'hooks/useColorMode'
import { baseTheme, lightTheme, darkTheme } from 'styles/prism'

// const editUrl = (slug) => `https://github.com/suyalcinkaya/onur.dev/edit/master/pages/blog/${slug}.mdx`
const discussUrl = (slug) => `https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/blog/${slug}`)}`

const Layout = (frontMatter) => {
  const slug = frontMatter.__resourcePath.split('/').pop().replace('.mdx', '')

  return ({ children }) => {
    const { systemTheme } = useColorMode()

    const Container = styled(LayoutCom)`
      ${baseTheme}
      ${systemTheme === 'light' ? lightTheme : darkTheme}
    `

    return (
      <Container>
        <BlogSeo url={`https://onur.dev/blog/${slug}`} {...frontMatter} />
        <Box as="article">
          <Stack spacing={2} mb={10}>
            <Heading as="h1" fontSize={{ _: '2xl', md: '4xl' }} fontWeight="medium" letterSpacing={-1}>
              {frontMatter.title}
            </Heading>
            <Box>
              <Text color={systemTheme === 'light' ? 'gray.600' : 'gray.400'} fontSize="sm">
                {dayjs(frontMatter.publishedAt).format('MMMM DD, YYYY')}
                {' • '}
                {frontMatter.readingTime.text}
              </Text>
            </Box>
            <Box>
              <Share title={frontMatter.title} url={`https://onur.dev/blog/${slug}`} />
            </Box>
          </Stack>
          {children}
          <Box mt={30}>
            <Link href={discussUrl(slug)}>{'Discuss on Twitter ⟶'}</Link>
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
        </Box>
      </Container>
    )
  }
}

export default Layout
