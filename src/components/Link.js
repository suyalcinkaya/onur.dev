import NextLink from 'next/link'

// --- Components
import Box from 'components/Box'
import Text from 'components/Text'

// --- Others
import useColorMode from 'hooks/useColorMode'

const Link = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const { colorMode } = useColorMode()

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Box as="a" pb={3} borderBottom="1px dotted" {...props} />
      </NextLink>
    )
  }

  const color = {
    light: 'hsl(208,99%,44%)',
    dark: 'rgb(96, 179, 251)'
  }

  return (
    <Text
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      color={color[colorMode]}
      pb={3}
      css={{
        textDecoration: 'none',
        transition: 'all 0.15s ease-out',
        borderBottom: '1px solid transparent',
        '&:hover': {
          borderBottom: `1px solid ${color[colorMode]}`
        }
      }}
      {...props}
    />
  )
}

export default Link
