import NextLink from 'next/link'

// --- Others
import { isExternalLink } from 'lib/helper'

const Wrapper = ({ url = undefined, isExternal, children, ...others }) => {
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

const Card = ({ title, description, url = undefined, ...others }) => {
  let isExternal = false
  if (url) isExternal = isExternalLink(url)

  return (
    <div {...others}>
      <div className={`flex flex-col space-y-1 rounded-lg p-3 -m-3 ${url ? 'hover:bg-gray-100 cursor-pointer' : ''}`}>
        <Wrapper
          url={url}
          isExternal={isExternal}
          {...(isExternal && {
            rel: 'noopener noreferrer',
            target: '_blank'
          })}
        >
          <span className="font-medium word-break">{title}</span>
        </Wrapper>
        {description && <div className="text-sm font-light text-gray-400 word-break">{description}</div>}
      </div>
    </div>
  )
}

export default Card
