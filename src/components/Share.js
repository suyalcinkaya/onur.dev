// --- Components
import { OutlineButton } from 'components/Button'
import IconButton from 'components/IconButton'

// --- Icons
import FacebookIcon from 'components/icons/Facebook'
import LinkedinIcon from 'components/icons/Linkedin'
import TwitterIcon from 'components/icons/Twitter'

// --- Others
import useClipboard from 'lib/hooks/useClipboard'
import { profiles } from 'lib/constants'

const Share = ({ title, url }) => {
  const { hasCopied, onCopy } = useClipboard(url)

  return (
    <div className="flex items-center space-x-4">
      {/* <OutlineButton onClick={onCopy} disabled={!!hasCopied}>
        {hasCopied ? 'Copied' : 'Copy Link'}
      </OutlineButton> */}
      <IconButton
        name="Share on Twitter"
        onClick={() =>
          window.open(
            `https://twitter.com/intent/tweet?url=${url}&text=“${title}”&via=${profiles.twitter.username}`,
            '_blank'
          )
        }
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        name="Share on LinkedIn"
        // color="#0a66c2"
        onClick={() =>
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        }
      >
        <LinkedinIcon />
      </IconButton>
      <IconButton
        name="Share on Facebook"
        // color="#1877f2"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')}
      >
        <FacebookIcon />
      </IconButton>
    </div>
  )
}

export default Share
