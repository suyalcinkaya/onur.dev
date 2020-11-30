import NextLink from 'next/link'
import { Box, Link as ChakraLink } from '@chakra-ui/react'

const linkStyle = {
  pb: '2px',
  color: 'link',
  borderBottom: '3px solid',
  borderColor: 'lightLink',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  // fontWeight: 500,
  _hover: {
    borderColor: 'link',
    textDecoration: 'none'
  }
}

const Link = (props) => {
  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Box as="a" {...linkStyle} {...props} />
      </NextLink>
    )
  }

  return <ChakraLink isExternal {...linkStyle} {...props} />
}

export default Link
