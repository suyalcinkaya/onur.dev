import NextLink from 'next/link'
import { Box, Flex } from '@chakra-ui/core'

// --- Components
import Button from 'components/Button'
import { O } from 'components/icons'

// --- Others
import useColorMode from 'hooks/useColorMode'

const HEADER_HEIGHT = 80
const navigation = [
  {
    url: '/about',
    name: 'About'
  }
]

const Header = () => {
  const { systemTheme } = useColorMode()

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        height={HEADER_HEIGHT}
        width="100%"
        bg={systemTheme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(26, 26, 26, 0.8)'}
        css={{
          backdropFilter: 'saturate(180%) blur(20px)'
        }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          maxWidth="800px"
          m="0 auto"
          px={{ base: 6, sm: 0 }}
        >
          <Box>
            <NextLink href="/">
              <a>
                <Box as={O} size="24px" />
              </a>
            </NextLink>
          </Box>
          <Box>
            {navigation.map((nav, navIndex) => (
              <React.Fragment key={`nav_${navIndex}`}>
                <NextLink href={nav.url} passHref>
                  <Button as="a" type="button">
                    {nav.name}
                  </Button>
                </NextLink>
              </React.Fragment>
            ))}
          </Box>
        </Flex>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </>
  )
}

export default Header
