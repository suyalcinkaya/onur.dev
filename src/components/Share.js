import { IconButton, Stack } from '@chakra-ui/react'

// --- Components
import Facebook from 'components/icons/Facebook'
import Linkedin from 'components/icons/Linkedin'
import Twitter from 'components/icons/Twitter'

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
    <Stack isInline spacing={0}>
      <IconButton
        aria-label="Share on Twitter"
        title="Share on Twitter"
        variant="ghost"
        icon={<Twitter />}
        onClick={shareOnTwitter}
      />
      <IconButton
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        variant="ghost"
        icon={<Linkedin />}
        onClick={shareOnLinkedIn}
      />
      <IconButton
        aria-label="Share on Facebook"
        title="Share on Facebook"
        variant="ghost"
        icon={<Facebook />}
        onClick={shareOnFacebook}
      />
    </Stack>
  )
}

export default Share
