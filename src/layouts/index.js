import { Avatar, Box, Button, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import tinytime from 'tinytime'

// --- Components
import BlogSeo from 'components/BlogSeo'
import LayoutCmp from 'components/Layout'
import PageHeading from 'components/PageHeading'
import Share from 'components/Share'
import Twitter from 'components/icons/Twitter'

// --- Others
import { getReadingTime } from 'utils/helper'
import { baseTheme, lightTheme } from 'styles/prism.css'

const Container = styled(LayoutCmp)`
  ${baseTheme}
  ${lightTheme}
`

const Layout = ({ frontMatter, children }) => {
  const slug = frontMatter.__resourcePath.split('/')[0]
  const readingTime = getReadingTime(frontMatter.readingTime.minutes)

  return (
    <Container>
      <BlogSeo url={`https://onur.dev/${slug}`} {...frontMatter} />
      <Stack as="article" spacing={16}>
        <Stack spacing={6}>
          <PageHeading>{frontMatter.title}</PageHeading>
          <Stack spacing={2}>
            <Stack
              spacing={{ base: 4, md: 0 }}
              flexDir={{ base: 'column', md: 'row' }}
              justify={{ md: 'space-between' }}
              align={{ md: 'flex-end' }}
            >
              <Stack isInline align="center" spacing={3}>
                <Avatar size="md" name="Onur Şuyalçınkaya" src="/images/og.jpg" />
                <Stack spacing={0}>
                  <Text fontWeight="medium" lineHeight="short">
                    Onur Şuyalçınkaya
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    <time dateTime={frontMatter.publishedAt}>
                      {tinytime('{MM} {DD}, {YYYY}').render(new Date(frontMatter.publishedAt))}
                    </time>
                    {' • '}
                    {readingTime}
                  </Text>
                </Stack>
              </Stack>
              <Share title={frontMatter.title} url={`https://onur.dev/${slug}`} />
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={6}>
          <Box>{children}</Box>
          <Button
            as="a"
            href={`https://twitter.com/search?q=${encodeURIComponent(`https://onur.dev/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<Twitter />}
            colorScheme="twitter"
            alignSelf="flex-start"
          >
            {'Discuss on Twitter →'}
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Layout
