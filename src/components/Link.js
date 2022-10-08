import dynamic from 'next/dynamic'
const DynamicNextLink = dynamic(() => import('next/link'))

// --- Others
import { cachedIsExternalLink } from 'utils/helpers'

const Link = (props) => {
  const { href = '#', ...rest } = props

  if (!cachedIsExternalLink(href)) {
    return <DynamicNextLink href={href} className="link" {...rest} />
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" className="link" {...rest} />
}

export default Link
