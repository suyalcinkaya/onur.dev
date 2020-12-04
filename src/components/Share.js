import { Button, IconButton, Stack, useClipboard } from '@chakra-ui/react'

// --- Components
import Facebook from 'components/icons/Facebook'
import Linkedin from 'components/icons/Linkedin'
import Twitter from 'components/icons/Twitter'

const Share = ({ title, url }) => {
  const { hasCopied, onCopy } = useClipboard(url)

  return (
    <Stack isInline spacing={1} align="center">
      <Button mr={1} size="sm" variant="outline" onClick={onCopy}>
        {hasCopied ? 'Copied' : 'Copy Link'}
      </Button>
      <IconButton
        aria-label="Share on Twitter"
        title="Share on Twitter"
        size="sm"
        variant="ghost"
        colorScheme="twitter"
        icon={<Twitter />}
        onClick={() =>
          window.open(`https://twitter.com/intent/tweet?url=${url}&text=“${title}”&via=onursdev`, '_blank')
        }
      />
      <IconButton
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        size="sm"
        variant="ghost"
        colorScheme="linkedin"
        icon={<Linkedin />}
        onClick={() =>
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        }
      />
      <IconButton
        aria-label="Share on Facebook"
        title="Share on Facebook"
        size="sm"
        variant="ghost"
        colorScheme="facebook"
        icon={<Facebook />}
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')}
      />
    </Stack>
  )
}

export default Share
