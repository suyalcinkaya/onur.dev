import NextLink from 'next/link'

import { Box, Link as ChakraLink } from '@chakra-ui/core'

// --- Others
import useColorMode from 'hooks/useColorMode'

const Link = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const { systemTheme } = useColorMode()

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Box as="a" fontWeight="medium" pb={1} borderBottom="1px dotted" {...props} />
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
      fontWeight="medium"
      color={color[systemTheme]}
      pb={1}
      css={{
        textDecoration: 'none',
        transition: 'all 0.15s ease-out',
        borderBottom: '1px solid transparent',
        '&:hover': {
          textDecoration: 'none',
          borderBottom: `1px solid ${color[systemTheme]}`
        }
      }}
      {...props}
    />
  )
}

export default Link
