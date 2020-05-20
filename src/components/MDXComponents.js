import Link from 'next/link'

// --- Components
import Box from 'components/Box'
import Flex from 'components/Flex'
import Text from 'components/Text'

// --- Others
import theme from 'utils/theme'

const Table = (props) => (
  <Box
    as="table"
    textAlign="left"
    mt={32}
    width="100%"
    css={`
      tbody > tr:nth-child(even) {
        background-color: ${theme.colors.gray200};
      }
    `}
    {...props}
  />
)

const THead = (props) => <Box as="th" bg="gray500" color="white" fontWeight={500} p={8} {...props} />

const TData = (props) => (
  <Box
    as="td"
    p="8px 0"
    pl="0.5rem"
    fontSize={14}
    css={`
      white-space: normal;
    `}
    {...props}
  />
)

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <Box as="a" borderBottom="1px dotted" {...props} />
      </Link>
    )
  }

  return (
    <Text
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      color="hsl(208,99%,44%)"
      css={{
        textDecoration: 'none',
        transition: 'all 0.15s ease-out',
        borderBottom: '1px solid transparent',
        '&:hover': {
          borderBottom: '1px solid hsl(208,99%,44%)'
        }
      }}
      {...props}
    />
  )
}

const Quote = (props) => {
  return (
    <Flex
      alignItems="center"
      position="relative"
      overflow="hidden"
      pl={12}
      pr={16}
      py={12}
      mt={16}
      mb={32}
      borderLeft="4px solid #3182ce"
      width="98%"
      bg="#ebf8ff"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 8
        }
      }}
      {...props}
    />
  )
}

const DocsHeading = (props) => (
  <Box
    css={{
      fontFamily: 'Gilroy',
      fontWeight: 600,
      scrollMarginTop: '120px',
      scrollSnapMargin: '120px', // Safari
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
    mb="1rem"
    mt="2rem"
  >
    <Box css={{ pointerEvents: 'auto' }}>
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          href={`#${props.id}`}
          color="#3182ce"
          fontWeight="normal"
          outline="none"
          opacity="0"
          ml="0.375rem"
        >
          #
        </Box>
      )}
    </Box>
  </Box>
)

const Ul = (props) => (
  <Box
    as="ul"
    p={0}
    m={0}
    mt="1rem"
    mb="2rem"
    css={`
      list-style: none;

      * + li {
        margin-top: 0.75rem;
      }
    `}
  >
    {props.children}
  </Box>
)

const Li = (props) => (
  <Box
    as="li"
    position="relative"
    pl="1.25rem"
    lineHeight={1.5}
    css={{
      '&::before': {
        content: `''`,
        position: 'absolute',
        left: '0.125rem',
        top: '0.45rem',
        display: 'block',
        height: '0.375rem',
        width: '0.375rem',
        borderRadius: 9999,
        backgroundColor: 'rgba(210, 214, 220, 1)'
      },

      '> p': {
        margin: 0
      }
    }}
  >
    {props.children}
  </Box>
)

const Hr = () => <Box bg="gray300" height={1} my={12} width="100%" />

const MDXComponents = {
  // h1: (props) => <Text as="h1" fontSize={{ _: 30, md: 36 }} fontWeight={600} my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" fontSize={{ _: 24, md: 30 }} mt="2em" mb="1em" {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize={{ _: 18, md: 22 }} mt="1em" mb="0.5em" {...props} />,
  inlineCode: (props) => (
    <Box
      as="code"
      display="inline-block"
      fontFamily={`SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`}
      fontSize="0.84em"
      bg="rgb(254, 252, 191)"
      color="rgb(116, 66, 16)"
      px={6}
      borderRadius={4}
      {...props}
    />
  ),
  br: (props) => <Box height={24} {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => <Text as="p" mt="1rem" mb="1rem" lineHeight="1.625" {...props} />,
  strong: (props) => <Text as="strong" fontWeight={600} {...props} />,
  ul: (props) => <Ul {...props} />,
  ol: (props) => <Box as="ol" pt={8} pl={16} ml={8} mb={32} {...props} />,
  li: (props) => <Li {...props} />,
  blockquote: Quote
}

export default MDXComponents
