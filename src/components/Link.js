import NextLink from 'next/link'

import { Box, Link as ChakraLink } from '@chakra-ui/core'

// --- Others
import theme from 'styles/theme'

const Link = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Box as="a" pb="2px" borderBottom="1px dotted" {...props} />
      </NextLink>
    )
  }

  const color = {
    light: 'blue.500',
    dark: 'blue.200'
  }

  return (
    <ChakraLink
      isExternal
      color="link"
      css={{
        textDecoration: 'none',
        transition: 'all 0.15s ease-out',
        borderBottom: '1px solid transparent',
        '&:hover': {
          textDecoration: 'none',
          borderBottom: `1px solid ${theme.colors.link}`
        }
      }}
      {...props}
    />
  )
}

export default Link
