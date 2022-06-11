import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const className = 'underline-under hover:underline -mb-px pb-px self-start text-blue-600'

const Link = (props) => {
  const { href = '#', ...rest } = props

  if (!isExternalLink(href)) {
    return (
      <NextLink href={href}>
        <a className={className} {...rest} />
      </NextLink>
    )
  }

  return <a target="_blank" href={`${href}?ref=onur.dev`} rel="noopener noreferrer" className={className} {...rest} />
}

export default Link
