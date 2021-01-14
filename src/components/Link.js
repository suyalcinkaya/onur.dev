import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const className =
  'text-primary-default no-underline border-primary-light self-start transition-colors duration-200 ease-in-out hover:border-primary-default hover:no-underline pb-px'

const style = {
  borderBottomWidth: 3
}

const Link = (props) => {
  const { href } = props

  if (!isExternalLink(href)) {
    return (
      <NextLink href={href}>
        <a className={className} style={style} {...props} />
      </NextLink>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" className={className} style={style} {...props} />
}

export default Link
