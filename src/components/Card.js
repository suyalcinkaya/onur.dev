import NextLink from 'next/link'

// --- Icons
import ExternalIcon from 'components/icons/External'

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

const Card = ({ title, description, url = undefined, ...others }) => {
  let isExternal = false
  if (url) isExternal = isExternalLink(url)

  return (
    <div className="space-y-1.5">
      <Wrapper
        url={url}
        className={`inline-block ${url ? 'underline-under hover:underline' : ''}`}
        {...(isExternal && {
          rel: 'noopener noreferrer',
          target: '_blank'
        })}
        {...others}
      >
        <span className="text-lg slashed-zero word-break">{title}</span>
        {isExternal && (
          <span className="ml-1 inline-block">
            <ExternalIcon height={14} width={14} />
          </span>
        )}
      </Wrapper>
      {description && <div className="text-gray-500 word-break">{description}</div>}
    </div>
  )
}

export default Card
