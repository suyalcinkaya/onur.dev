import styled from 'styled-components'

import Box from 'components/Box'
import Button from 'components/Button'
import { Email, Github, Medium, Linkedin, Soundcloud, Twitter } from './icons'

const Layout = ({ children, ...others }) => (
  <Box as="main" mt={{ _: 30, md: 50 }} mx="auto" maxWidth={700} w="100%" px="1.5rem" {...others}>
    {children}
    <Box display="flex" justifyContent="center" alignItems="center" mb={30}>
      <a href="https://twitter.com/onursdev" target="_blank" rel="noopener noreferrer" title="Twitter">
        <Button type="button" aria-label="Twitter" color="#718096">
          <Twitter />
        </Button>
      </a>
      <a href="https://github.com/suyalcinkaya/" target="_blank" rel="noopener noreferrer" title="GitHub">
        <Button type="button" aria-label="GitHub" color="#718096">
          <Github />
        </Button>
      </a>
      <a
        href="https://www.linkedin.com/in/onursuyalcinkaya/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <Button type="button" aria-label="LinkedIn" color="#718096">
          <Linkedin />
        </Button>
      </a>
      <a href="https://medium.com/@suyalcinkaya" target="_blank" rel="noopener noreferrer" title="Medium">
        <Button type="button" aria-label="Medium" color="#718096">
          <Medium />
        </Button>
      </a>
      <a href="https://soundcloud.com/jagerman" target="_blank" rel="noopener noreferrer" title="Soundcloud">
        <Button type="button" aria-label="Soundcloud" color="#718096">
          <Soundcloud />
        </Button>
      </a>
      <a href="mailto:onur.suyalcinkaya@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
        <Button type="button" aria-label="Email" color="#718096">
          <Email />
        </Button>
      </a>
    </Box>
  </Box>
)

export default Layout
