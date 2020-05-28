// --- Components
import Box from 'components/Box'
import Flex from 'components/Flex'
import Link from 'components/Link'
import Text from 'components/Text'

// --- Others
import theme from 'utils/theme'
import useColorMode from 'hooks/useColorMode'

const Table = (props) => (
  <Box
    as="table"
    textAlign="left"
    mt={32}
    width="100%"
    css={{
      'tbody > tr:nth-of-type(even)': {
        backgroundColor: theme.colors.gray200
      }
    }}
    {...props}
  />
)

const THead = (props) => <Box as="th" bg="gray500" color="white" fontWeight={500} p="0.5rem" {...props} />

const TData = (props) => (
  <Box
    as="td"
    p="8px 0"
    pl="0.5rem"
    fontSize={14}
    css={{
      whiteSpace: 'normal'
    }}
    {...props}
  />
)

const Quote = (props) => {
  const { colorMode } = useColorMode()

  const bg = {
    light: '#ebf8ff',
    dark: 'rgb(45, 55, 72)'
  }

  const borderColor = {
    light: '#3182ce',
    dark: 'rgb(42, 105, 172)'
  }

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
      borderLeft={`4px solid ${borderColor[colorMode]}`}
      width="98%"
      bg={bg[colorMode]}
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
    fontFamily="display"
    css={{
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
    css={{
      listStyleType: 'circle',
      listStylePosition: 'inside',
      '* + li': {
        marginTop: '0.5rem'
      }
    }}
  >
    {props.children}
  </Box>
)

const Li = (props) => (
  <Box
    as="li"
    position="relative"
    pl={1}
    lineHeight={1.5}
    css={{
      '> p': {
        margin: 0
      }
    }}
  >
    {props.children}
  </Box>
)

const InlineCode = (props) => {
  const { colorMode } = useColorMode()

  const bg = {
    light: 'rgb(254, 252, 191)',
    dark: 'rgba(250, 240, 137, 0.16)'
  }

  const color = {
    light: 'rgb(116, 66, 16)',
    dark: 'rgb(250, 240, 137)'
  }

  return (
    <Box
      as="code"
      display="inline-block"
      fontFamily="mono"
      fontSize="0.84em"
      bg={bg[colorMode]}
      color={color[colorMode]}
      px="0.5rem"
      borderRadius={6}
      {...props}
    />
  )
}

const Hr = (props) => {
  const { colorMode } = useColorMode()

  const bg = {
    light: theme.colors.gray300,
    dark: theme.colors.gray800
  }

  return <Box bg={bg[colorMode]} height={1} my="2rem" width="100%" {...props} />
}

const MDXComponents = {
  // h1: (props) => <Text as="h1" fontSize={{ _: 30, md: 36 }} fontWeight={600} my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" fontSize={{ _: 24, md: 30 }} mt="2rem" mb="1rem" {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize={{ _: 18, md: 22 }} mt="1rem" mb="0.5rem" {...props} />,
  inlineCode: InlineCode,
  br: (props) => <Box height={24} {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: Link,
  p: (props) => <Text as="p" mt="1rem" mb="1rem" lineHeight="1.625" {...props} />,
  strong: (props) => <Text as="strong" fontWeight={600} {...props} />,
  ul: (props) => <Ul {...props} />,
  ol: (props) => <Box as="ol" pt="0.5rem" pl="1rem" ml="0.5rem" mb="2rem" {...props} />,
  li: (props) => <Li {...props} />,
  blockquote: Quote
}

export default MDXComponents
