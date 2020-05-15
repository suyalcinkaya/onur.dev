import Link from 'next/link'

import Box from 'components/Box'
import Text from 'components/Text'

const Table = (props) => <Box as="table" textAlign="left" mt={32} width="100%" {...props} />

const THead = (props) => (
  <Box as="th" bg="gray500" fontWeight="semibold" p={2} fontSize="sm" {...props} />
)

const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth={1}
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...props} />
      </Link>
    )
  }

  return <a {...props} />
}

const DocsHeading = (props) => (
  <Box
    css={`
      scroll-margin-top: 100px;
      scroll-snap-margin: 100px;
      &[id]: {
        pointerevents: 'none';
      }
      &[id]:before: {
        display: block;
        height: 6rem;
        margintop: -6rem;
        visibility: hidden;
        content: '';
      }
      &[id]:hover {
        a {
          opacity: 1;
        }
      }
    `}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          href={`#${props.id}`}
          color="blue500"
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

const Hr = () => <Box bg="gray500" height={1} my={12} w="100%" />

const MDXComponents = {
  h1: (props) => <Text as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  inlineCode: (props) => (
    <Text as="code" fontSize="0.84em" bg="rgb(254, 252, 191)" color="rgb(116, 66, 16)" {...props} />
  ),
  br: (props) => <Box height={24} {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />
  // blockquote: Quote
}

export default MDXComponents
