import { useState } from 'react'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'

// --- Components
import { Box, BlogPost, Flex, Layout, Text } from 'components'
import { Search } from 'components/icons'

// --- Others
import { frontMatter as blogPosts } from './blog/**/*.mdx' // Thanks to babel-plugin-import-glob-array
import useColorMode from 'hooks/useColorMode'
import theme from 'utils/theme'

const url = 'https://onur.dev/blog'
const title = 'Blog – Onur Şuyalçınkaya'
const description = 'Thoughts on the software industry, programming, tech, music, and my personal life.'

const Blog = () => {
  const [searchValue, setSearchValue] = useState('')
  const { colorMode } = useColorMode()

  const Input = styled.input`
    display: block;
    font-size: 1rem;
    line-height: 1.25rem;
    width: 100%;
    height: 3rem;
    padding-right: 3rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: 0;
    background-color: #fff;
    border: 1px solid #d2d6dc;
    border-radius: 0.375rem;
    appearance: none;

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      color: ${theme.colors.gray500};
      opacity: 1; /* Firefox */
    }

    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: ${theme.colors.gray500};
    }

    /* Microsoft Edge */
    ::-ms-input-placeholder {
      color: ${theme.colors.gray500};
    }

    &:hover {
      border-color: #cbd5e0;
    }

    &:focus {
      outline: none;
      // box-shadow: 0 0 0 3px rgba(164, 202, 254, 0.45);
      box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 4px rgba(50, 151, 211, 0.3);
      border-color: #a4cafe;
    }
  `

  const sortedBlogPosts = blogPosts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Layout>
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
          <Text
            as="h1"
            fontFamily="display"
            fontSize={{ _: 32, md: 48 }}
            fontWeight={500}
            letterSpacing="-0.025em"
            // color="#000"
            mt={0}
            mb={10}
          >
            Blog
          </Text>
          <Text as="p" lineHeight={1.5}>
            {`I've been writing online since 2018, mostly about web development, tips and tricks.
                In total, I've written ${blogPosts.length} articles on this site.
                Use the search below to filter by title.`}
          </Text>
        </Flex>
        <Box position="relative" mt="1rem" mb="2rem" boxShadow="0 1px 2px 0 rgba(0,0,0,.05)">
          <Input
            aria-label="Search articles"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
          />
          <Box position="absolute" top={0} right="1rem" height="100%">
            <Flex alignItems="center" height="100%" color="gray500">
              <Search />
            </Flex>
          </Box>
        </Box>
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth={700} mt="0.5rem">
          {!sortedBlogPosts.length && <Text>No posts found.</Text>}
          {sortedBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
      </Layout>
    </>
  )
}

export default Blog
