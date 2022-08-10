import dynamic from 'next/dynamic'

// --- Others
import { isExternalLink } from 'lib/helper'

const className = 'underline underline-under hover:no-underline self-start'

const Link = (props) => {
  const { href = '#', ...rest } = props
  const NextLink = dynamic(() => import('next/link'))

  if (!isExternalLink(href)) {
    return (
      <NextLink href={href}>
        <a className={className} {...rest} />
      </NextLink>
    )
  }

  return <a href={`${href}?ref=onur.dev`} target="_blank" rel="noopener noreferrer" className={className} {...rest} />
}

export default Link
