import { AspectRatio, Box, Code, Divider, List, ListItem, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

// --- Components
import Link from 'components/Link'

// --- Others
import theme from 'styles/theme'

const Table = (props) => <Box as="table" d="inline-table" textAlign="left" my={4} width="100%" {...props} />

const StyledTHead = styled(Box)({
  boxShadow: `0 0 0 1px ${theme.colors.gray[200]}`,
  borderRadius: theme.radii.normal,
  overflow: 'hidden',

  th: {
    background: theme.colors.gray[50]
  },
  'th:first-of-type': {
    borderTopLeftRadius: theme.radii.normal,
    borderBottomLeftRadius: theme.radii.normal
  },
  'th:last-of-type': {
    borderTopRightRadius: theme.radii.normal,
    borderBottomRightRadius: theme.radii.normal
  }
})

const StyledTBody = styled(Box)({
  'tr:not(:last-of-type)': {
    borderBottom: `1px solid ${theme.colors.gray[200]}`
  }
})

const THead = (props) => <StyledTHead as="thead" color="gray.600" {...props} />

const TBody = (props) => <StyledTBody as="tbody" {...props} />

const TH = (props) => <Box as="th" fontWeight="normal" px={{ base: 3, md: 4 }} py={3} {...props} />

const TData = (props) => <Box as="td" py={3} pl={{ base: 3, md: 4 }} whiteSpace="normal" {...props} />

const StyledQuote = styled(Box)({
  '> *:last-of-type': {
    marginBottom: 0
  }
})

const Quote = (props) => (
  <StyledQuote
    as="blockquote"
    pl={{ base: 4, md: 6 }}
    mb={6}
    borderLeftWidth={4}
    borderLeftColor="gray.200"
    bg="transparent"
    fontStyle="italic"
    {...props}
  />
)

const HeadingContainer = styled(Box)`
  scroll-margin-top: 100px;
  scroll-snap-margin-top: 100px;

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

const iFrame = ({ children, ...other }) => (
  <AspectRatio ratio={16 / 9} {...other}>
    {children}
  </AspectRatio>
)

const Img = (props) => <Image quality={25} {...props} />

const InlineCode = (props) => <Code colorScheme="yellow" px="0.5rem" borderRadius={6} {...props} />

const Hr = (props) => <Divider my={8} mx="auto" width={1 / 2} {...props} />

const MDXComponents = {
  h2: (props) => <DocsHeading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mt={8} mb={4} {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mt={8} mb={2} {...props} />,
  inlineCode: InlineCode,
  br: (props) => <Box height={2} {...props} />,
  hr: Hr,
  table: Table,
  th: TH,
  td: TData,
  thead: THead,
  tbody: TBody,
  a: Link,
  p: (props) => <Text as="p" mb={6} {...props} />,
  ul: (props) => <List as="ul" styleType="circle" stylePosition="inside" my={4} pl={6} {...props} />,
  ol: (props) => <List as="ol" styleType="decimal" stylePosition="inside" my={4} pl={6} {...props} />,
  li: (props) => <ListItem mb={4} {...props} />,
  blockquote: Quote,
  // iframe: iFrame,
  img: Img
}

export default MDXComponents
