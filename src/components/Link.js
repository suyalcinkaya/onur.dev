import dynamic from 'next/dynamic'

// --- Others
import { isExternalLink } from 'utils/helpers'

const Link = (props) => {
  const { href = '#', ...rest } = props
  const NextLink = dynamic(() => import('next/link'))

  if (!isExternalLink(href)) {
    return (
      <NextLink href={href}>
        <a className="link" {...rest} />
      </NextLink>
    )
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" className="link" {...rest} />
}

export default Link
