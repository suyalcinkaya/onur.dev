import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const Wrapper = ({ url, isExternal, children, ...rest }) => {
  if (!url) return <div {...rest}>{children}</div>

  if (isExternal) {
    const href = `${url}?ref=onur.dev`
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={url}>
      <a {...rest}>{children}</a>
    </NextLink>
  )
}

const Card = ({ title, description, url, ...rest }) => {
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
        className={`flex flex-col gap-y-1 rounded-lg p-3 -m-3 transition-colors ${
          url ? 'hover:bg-gray-100 cursor-pointer' : ''
        }`}
        {...rest}
      >
        <span className="font-medium word-break">{title}</span>
        {description && <div className="text-sm font-light text-gray-500 word-break">{description}</div>}
      </Wrapper>
    </div>
  )
}

export default Card
