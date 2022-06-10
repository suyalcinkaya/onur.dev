import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const Wrapper = ({ url, isExternal, children, ...others }) => {
  if (!url) return <div {...others}>{children}</div>

  if (isExternal) {
    const href = `${url}?ref=onur.dev`
    return (
      <a href={href} {...others}>
        {children}
      </a>
    )
  }

  return (
    <div>
      <NextLink href={url}>
        <a {...others}>{children}</a>
      </NextLink>
    </div>
  )
}

const Card = ({ title, description, url, ...others }) => {
  let isExternal = false
  if (url) isExternal = isExternalLink(url)

  return (
    <div>
      <Wrapper
        url={url}
        isExternal={isExternal}
        {...(isExternal && {
          rel: 'noopener noreferrer',
          target: '_blank'
        })}
        className={`flex flex-col space-y-1 rounded-lg p-3 -m-3 transition-colors ${
          url ? 'hover:bg-gray-100 cursor-pointer' : ''
        }`}
        {...others}
      >
        <span className="font-medium word-break">{title}</span>
        {description && <div className="text-sm font-light text-gray-500 word-break">{description}</div>}
      </Wrapper>
    </div>
  )
}

export default Card
