import { NextSeo } from 'next-seo'
import { Box, Flex, Grid, Heading, Input, InputLeftElement, InputGroup, Link, Text, Stack } from '@chakra-ui/core'
import styled from '@emotion/styled'

// --- Components
import { BlogPost, Layout } from 'components'

// --- Others
import { frontMatter as blogPosts } from './blog/**/*.mdx' // Thanks to babel-plugin-import-glob-array
import useColorMode from 'hooks/useColorMode'
import theme from 'styles/theme'

const url = 'https://onur.dev/blog'
const title = 'Blog – Onur Şuyalçınkaya'
const description = 'Thoughts on the software industry, programming, tech, music, and my personal life.'

const Blog = () => {
  const { colorMode } = useColorMode()

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
        <Stack spacing={12}>
          <Stack spacing={6}>
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium" letterSpacing={-1}>
              Blog
            </Heading>
            <Text>
              {`I've been writing online since 2018, mostly about web development, tips and tricks.
                In total, I've written ${blogPosts.length} articles on this site.`}
            </Text>
          </Stack>
          <Grid gridGap={8}>
            {blogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Grid>
        </Stack>

        {/* <Box position="relative" mt="1rem" mb="2rem" boxShadow="0 1px 2px 0 rgba(0,0,0,.05)">
          <Input
            aria-label="Search articles"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            colorMode={colorMode}
          />
          <Box position="absolute" top={0} right="1rem" height="100%">
            <Flex alignItems="center" height="100%" color={colorMode === 'light' ? 'gray.500' : 'gray.600'}>
              <Search />
            </Flex>
          </Box>
        </Box> */}
      </Layout>
    </>
  )
}

const Inputz = styled.input`
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
  color: inherit;
  background-color: ${(props) => (props.colorMode === 'light' ? theme.colors.white : 'rgba(255, 255, 255, 0.06)')};
  border: 1px solid ${(props) => (props.colorMode === 'light' ? '#d2d6dc' : 'rgba(255, 255, 255, 0.04)')};
  border-radius: 0.375rem;
  appearance: none;

  /* Chrome, Firefox, Opera, Safari 10.1+ */
  ::placeholder {
    color: ${(props) => (props.colorMode === 'light' ? theme.colors.gray500 : theme.colors.gray[600])};
    opacity: 1; /* Firefox */
  }

  /* Internet Explorer 10-11 */
  :-ms-input-placeholder {
    color: ${(props) => (props.colorMode === 'light' ? theme.colors.gray500 : theme.colors.gray[600])};
  }

  /* Microsoft Edge */
  ::-ms-input-placeholder {
    color: ${(props) => (props.colorMode === 'light' ? theme.colors.gray500 : theme.colors.gray[600])};
  }

  &:hover {
    border-color: ${(props) => (props.colorMode === 'light' ? '#cbd5e0' : 'rgba(255, 255, 255, 0.08)')};
  }

  &:focus {
    outline: none;
    // box-shadow: 0 0 0 3px rgba(164, 202, 254, 0.45);
    box-shadow: 0 0 0 1px rgba(50, 151, 211, 0.3), 0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 4px rgba(50, 151, 211, 0.3);
    border-color: #a4cafe;
  }
`

export default Blog
