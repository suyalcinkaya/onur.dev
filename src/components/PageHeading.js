import { Heading } from '@chakra-ui/react'

const PageHeading = ({ children, ...others }) => {
  return (
    <Heading
      as="h1"
      d="flex"
      alignItems="center"
      fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
      fontWeight="bolder"
      lineHeight="shorter"
      {...others}
    >
      {children}
    </Heading>
  )
}

export default PageHeading
