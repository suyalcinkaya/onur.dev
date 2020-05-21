import styled from '@emotion/styled'

import Box from 'components/Box'
import Flex from 'components/Flex'
import { Facebook, LinkedinBox, Twitter } from 'components/icons'

const Button = styled.button({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  background: 'none',
  boxShadow: 'none',
  padding: 0,
  outline: 'none',
  color: 'hsla(0, 0%, 0%, 0.8)',
  transition: 'all 0.15s ease-out',
  '&:hover': {
    color: '#000'
  }
})

const Share = ({ title, url }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=400, height=500')
  }

  const shareOnTwitter = () => {
    window.open(
      `https://www.twitter.com/share?text=${title}%20by%20@onursdev%20&url=${url}`,
      '_blank',
      'width=400, height=500'
    )
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=400, height=500')
  }

  return (
    <Flex justifyContent={{ _: 'flex-start', md: 'flex-end' }} alignItems="center" mt={8}>
      <Box as={Button} type="button" title="Share on Twitter" onClick={shareOnTwitter} m={0}>
        <Twitter />
      </Box>
      <Box as={Button} type="button" title="Share on LinkedIn" onClick={shareOnLinkedIn} m={0} mx={6}>
        <LinkedinBox />
      </Box>
      <Box as={Button} type="button" title="Share on Facebook" onClick={shareOnFacebook} m={0}>
        <Facebook />
      </Box>
    </Flex>
  )
}

export default Share
