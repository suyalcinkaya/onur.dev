import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const className =
  'border-b-2 border-transparent duration-200 ease-in-out hover:border-primary-default no-underline -mb-px pb-px self-start text-primary-default transition-colors'

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
