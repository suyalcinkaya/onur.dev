import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const className = 'underline-under hover:underline -mb-px pb-px self-start text-blue-400 transition-colors'

const Link = (props) => {
  const { href } = props

  if (!isExternalLink(href)) {
    return (
      <NextLink href={href}>
        <a className={className} {...props} />
      </NextLink>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" className={className} {...props} />
}

export default Link
