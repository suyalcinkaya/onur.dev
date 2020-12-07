import { Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'

// --- Icons
import Coffee from 'components/icons/Coffee'
import MenuIcon from 'components/icons/Menu'
import External from 'components/icons/External'

// --- Others
import { BUY_ME_COFFEE_URL, HEADER_HEIGHT, MAX_WIDTH, navigations } from 'utils/constants'

const Header = () => {
  const router = useRouter()

  return (
    <Fragment>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={9}
        height={HEADER_HEIGHT}
        width="100%"
        mx="auto"
        bg="hsla(0, 0%, 100%, 0.8)"
        borderBottom="1px solid rgb(234, 234, 234)"
        style={{ backdropFilter: 'saturate(180%) blur(5px)', WebkitBackdropFilter: 'saturate(180%) blur(5px)' }}
      >
        <Flex
          justify="space-between"
          alignItems="center"
          height="100%"
          maxW={MAX_WIDTH}
          m="0 auto"
          px={{ base: 4, sm: 6, md: 16 }}
        >
          <NextLink href="/" passHref>
            <Button as="a" variant="outline">
              Home
            </Button>
          </NextLink>
          <Menu isLazy>
            <MenuButton as={IconButton} aria-label="Menü" title="Menü" icon={<MenuIcon />} variant="ghost" />
            <MenuList px={2} rounded="normal">
              <MenuItem
                as="a"
                href={BUY_ME_COFFEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                px={4}
                py={2}
                rounded="normal"
              >
                <Flex align="center" pos="relative">
                  <Coffee />
                  &nbsp;&nbsp;
                  <span>Buy me a coffee</span>
                  &nbsp;
                  <Box pos="absolute" top="0.3rem" right={-4}>
                    <External height={14} width={14} />
                  </Box>
                </Flex>
              </MenuItem>
              <MenuDivider />
              {navigations.map((nav, navIndex) => (
                <Fragment key={`nav_${navIndex}`}>
                  <NextLink href={nav.url} passHref>
                    <MenuItem as="a" px={4} py={2} rounded="normal" isDisabled={router.pathname === nav.url}>
                      {nav.icon}
                      &nbsp;&nbsp;
                      {nav.name}
                    </MenuItem>
                  </NextLink>
                </Fragment>
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
