import NextLink from 'next/link'

import Box from 'components/Box'
import Text from 'components/Text'

const Link = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Box as="a" pb={2} borderBottom="1px dotted" {...props} />
      </NextLink>
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

export default Link
