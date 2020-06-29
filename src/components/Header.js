import Link from 'next/link'

// --- Components
import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Text from 'components/Text'
import { Moon, Sun, O } from 'components/icons'

// --- Others
import useColorMode from 'hooks/useColorMode'

const HEADER_HEIGHT = 80
const navigation = [
  {
    url: '/blog',
    name: 'Blog'
  },
  {
    url: '/about',
    name: 'About'
  },
  {
    url: '/',
    name: 'Home'
  }
]

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        // boxShadow="rgba(0, 0, 0, 0.18) 0px 1px 2px"
        height={HEADER_HEIGHT}
        width="100%"
        bg={colorMode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(23, 25, 35, 0.8)'}
        css={{
          backdropFilter: 'saturate(180%) blur(16px)'
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
            <Box as={O} size="24px" />
          </Box>
          <Box>
            {navigation.map((nav, navIndex) => (
              <React.Fragment key={`nav_${navIndex}`}>
                <Link href={nav.url} passHref>
                  <Button as="a" type="button">
                    {nav.name}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
            <Button px={0} onClick={toggleColorMode} aria-label="Switch Theme">
              <Box as={colorMode === 'light' ? Moon : Sun} width={18} />
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </>
  )
}

export default Header
