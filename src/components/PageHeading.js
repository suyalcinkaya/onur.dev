import { Heading } from '@chakra-ui/react'

const PageHeading = ({ children, ...others }) => {
  return (
    <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bolder" lineHeight="shorter" {...others}>
      {children}
    </Heading>
  )
}

export default PageHeading
