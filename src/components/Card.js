import NextLink from 'next/link'

// --- Icons
import External from 'components/icons/External'

// --- Others
import { isExternalLink } from 'lib/helper'

const Wrapper = ({ url = undefined, children, ...others }) => {
  if (!url) return <div {...others}>{children}</div>
  const isExternal = isExternalLink(url)

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

const Card = ({ title, primaryText, secondaryText, url = undefined, ...others }) => {
  let isExternal = false
  if (url) isExternal = isExternalLink(url)

  return (
    <div className="space-y-1.5">
      {primaryText && <div className="inline-block text-gray-500 text-sm">{primaryText}</div>}
      <Wrapper
        url={url}
        className={`inline-block ${url ? 'underline-under hover:underline' : ''}`}
        {...(isExternal && {
          rel: 'noopener noreferrer',
          target: '_blank'
        })}
        {...others}
      >
        <span className="text-lg">{title}</span>
        {isExternal && (
          <span className="ml-1 inline-block">
            <External height={14} width={14} />
          </span>
        )}
      </Wrapper>
      {secondaryText && <div className="inline-block text-gray-400 overflow-hidden md:line-clamp-2">{secondaryText}</div>}
    </div>
  )
}

export default Card
