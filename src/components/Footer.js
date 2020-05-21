// --- Components
import Button from 'components/Button'
import Box from 'components/Box'
import Flex from 'components/Flex'
import { Github, Medium, Linkedin, Soundcloud, Twitter } from './icons'

const Footer = () => (
  <Box
    display="flex"
    flexDirection={{ _: 'column', md: 'row' }}
    alignItems="center"
    justifyContent="space-between"
    mb={30}
  >
    <Flex justifyContent="center" alignItems="center" ml={{ _: 0, md: '-0.75rem' }}>
      <a href="https://twitter.com/onursdev" target="_blank" rel="noopener noreferrer" title="Twitter">
        <Button type="button" aria-label="Twitter" px="0.5rem" color="#718096">
          <Twitter />
        </Button>
      </a>
      <a href="https://github.com/suyalcinkaya/" target="_blank" rel="noopener noreferrer" title="GitHub">
        <Button type="button" aria-label="GitHub" px="0.5rem" color="#718096">
          <Github />
        </Button>
      </a>
      <a
        href="https://www.linkedin.com/in/onursuyalcinkaya/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <Button type="button" aria-label="LinkedIn" px="0.5rem" color="#718096">
          <Linkedin />
        </Button>
      </a>
      <a href="https://medium.com/@suyalcinkaya" target="_blank" rel="noopener noreferrer" title="Medium">
        <Button type="button" aria-label="Medium" px="0.5rem" color="#718096">
          <Medium />
        </Button>
      </a>
      <a href="https://soundcloud.com/jagerman" target="_blank" rel="noopener noreferrer" title="Soundcloud">
        <Button type="button" aria-label="Soundcloud" px="0.5rem" color="#718096">
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

export default Footer
