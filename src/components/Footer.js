// --- Components
import Button from 'components/Button'
import Box from 'components/Box'
import Flex from 'components/Flex'
import { Github, Medium, Linkedin, Soundcloud, Twitter } from 'components/icons'

// --- Others
import useColorMode from 'hooks/useColorMode'
import theme from 'styles/theme'

const Footer = () => {
  const { colorMode } = useColorMode()

  const color = {
    light: theme.colors.gray600,
    dark: theme.colors.gray400
  }

  return (
    <Box
      display="flex"
      flexDirection={{ _: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      mb={30}
    >
      <Flex justifyContent="center" alignItems="center" ml={{ md: '-0.75rem' }} mb={{ _: '0.5rem', md: 0 }}>
        <a href="https://twitter.com/onursdev" target="_blank" rel="noopener noreferrer" title="Twitter">
          <Button type="button" aria-label="Twitter" px="0.5rem" color={color[colorMode]}>
            <Twitter />
          </Button>
        </a>
        <a href="https://github.com/suyalcinkaya/" target="_blank" rel="noopener noreferrer" title="GitHub">
          <Button type="button" aria-label="GitHub" px="0.5rem" color={color[colorMode]}>
            <Github />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/onursuyalcinkaya/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Button type="button" aria-label="LinkedIn" px="0.5rem" color={color[colorMode]}>
            <Linkedin />
          </Button>
        </a>
        <a href="https://medium.com/@suyalcinkaya" target="_blank" rel="noopener noreferrer" title="Medium">
          <Button type="button" aria-label="Medium" px="0.5rem" color={color[colorMode]}>
            <Medium />
          </Button>
        </a>
        <a href="https://soundcloud.com/jagerman" target="_blank" rel="noopener noreferrer" title="Soundcloud">
          <Button type="button" aria-label="Soundcloud" px="0.5rem" color={color[colorMode]}>
            <Soundcloud />
          </Button>
        </a>
      </Flex>
      <Box fontSize={14}>
        <strong>onur.suyalcinkaya</strong>
        {' at '}
        <strong>gmail</strong>
        {' dot '}
        <strong>com</strong>
      </Box>
    </Box>
  )
}

export default Footer
