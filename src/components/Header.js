import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'

// --- Components
import MenuIcon from 'components/icons/Menu'

// --- Others
import { HEADER_HEIGHT, navigations } from 'utils/constants'

const Header = () => {
  const router = useRouter()

  return (
    <Fragment>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={9}
        height={HEADER_HEIGHT}
        width="100%"
        maxW="inherit"
        mx="auto"
        bg="hsla(0, 0%, 100%, 0.8)"
        style={{ backdropFilter: 'saturate(180%) blur(5px)', WebkitBackdropFilter: 'saturate(180%) blur(5px)' }}
      >
        <Flex justify="space-between" alignItems="center" height="100%" m="0 auto" px={{ base: 4, sm: 6, md: 16 }}>
          <NextLink href="/">
            <a aria-label="onur.dev Logo" title="Home">
              <Box boxSize={{ base: 16, md: 20 }}>
                <Image src="/images/optimized-me.png" alt="onur.dev Logo" width={80} height={80} />
              </Box>
            </a>
          </NextLink>
          <Menu isLazy>
            <MenuButton as={IconButton} aria-label="Menü" title="Menü" icon={<MenuIcon />} variant="ghost" />
            <MenuList>
              <MenuItem px={6} py={2}>
                <a href="https://ko-fi.com/suyalcinkaya" target="_blank" rel="noopener noreferrer">
                  Buy me a coffee&nbsp; ☕️
                </a>
              </MenuItem>
              <MenuDivider />
              {navigations.map((nav, navIndex) => (
                <MenuItem key={`nav_${navIndex}`} px={6} py={2} onClick={() => router.push(nav.url)}>
                  {nav.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </Fragment>
  )
}

export default Header
