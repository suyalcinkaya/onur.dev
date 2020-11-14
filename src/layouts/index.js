import { Box, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import tinytime from 'tinytime'

// --- Components
import { BlogSeo, Layout as LayoutCom, Link, PageHeading, Share } from 'components'

// --- Others
import { baseTheme, lightTheme } from 'styles/prism'

const Container = styled(LayoutCom)`
  ${baseTheme}
  ${lightTheme}
`

const Layout = ({ frontMatter, children }) => {
  const slug = frontMatter.__resourcePath.split('/')[0]

  return (
    <Container>
      <BlogSeo url={`https://onur.dev/${slug}`} {...frontMatter} />
      <article>
        <Stack spacing={4} mb={10}>
          <PageHeading>{frontMatter.title}</PageHeading>
          <Box>
            <Text color="gray.500">
              <time dateTime={frontMatter.publishedAt}>
                {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
              </time>
              {' • '}
              {frontMatter.readingTime.text}
            </Text>
          </Box>
          <Box>
            <Share title={frontMatter.title} url={`https://onur.dev/${slug}`} />
          </Box>
        </Stack>
        {children}
        <Box mt={30}>
          <Link href={`https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/${slug}`)}`}>
            {'Discuss on Twitter →'}
          </Link>
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
      </article>
    </Container>
  )
}

export default Layout
