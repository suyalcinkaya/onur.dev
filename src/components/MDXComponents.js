import { Box, Code, List, ListItem, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

// --- Components
import Link from 'components/Link'

// --- Others
import theme from 'styles/theme'

const Table = (props) => (
  <Box
    as="table"
    textAlign="left"
    my={4}
    width="100%"
    css={{
      'tbody > tr:nth-of-type(even)': {
        backgroundColor: theme.colors.gray[200]
      }
    }}
    {...props}
  />
)

const THead = (props) => <Box as="th" bg="gray.400" color="white" fontWeight="medium" p="0.5rem" {...props} />

const TData = (props) => (
  <Box
    as="td"
    py={3}
    pl={2}
    fontSize={14}
    css={{
      whiteSpace: 'normal'
    }}
    {...props}
  />
)

const Quote = (props) => (
  <Box
    p={4}
    mt={4}
    mb={8}
    borderLeft={`4px solid #3182ce`}
    bg="gray.200"
    css={{
      '> *:first-of-type': {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 8
      },
      '> *:last-of-type': {
        marginBottom: 0
      }
    }}
    {...props}
  />
)

const HeadingContainer = styled(Box)`
  scroll-margin-top: 100px;
  scroll-snap-margin: 100px;

  a {
    transition: 200ms ease-in-out;
  }

  &[id]:before {
    display: block;
    visibility: hidden;
    content: '';
  }

  &[id]:hover {
    a {
      opacity: 1;
    }
  }
`

const DocsHeading = (props) => (
  <HeadingContainer fontWeight="bold" {...props}>
    <div style={{ pointerEvents: 'auto' }}>
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          href={`#${props.id}`}
          color="link"
          fontWeight="medium"
          outline="none"
          opacity="0"
          ml={2}
        >
          #
        </Box>
      )}
    </div>
  </HeadingContainer>
)

const Img = (props) => <Image quality={25} {...props} />

const InlineCode = (props) => <Code colorScheme="yellow" px="0.5rem" borderRadius={6} {...props} />

const Hr = (props) => <Box bg="gray.300" height="1px" my={8} width="100%" {...props} />

const MDXComponents = {
  h2: (props) => <DocsHeading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mt={8} mb={4} {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mt={8} mb={2} {...props} />,
  inlineCode: InlineCode,
  br: (props) => <Box height={24} {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: Link,
  p: (props) => <Text as="p" mb={4} {...props} />,
  ul: (props) => <List styleType="circle" stylePosition="inside" my={4} {...props} />,
  ol: (props) => <List as="ol" {...props} />,
  li: (props) => <ListItem mb={4} {...props} />,
  blockquote: Quote,
  img: Img
}

export default MDXComponents
