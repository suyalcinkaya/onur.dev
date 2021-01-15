import NextLink from 'next/link'

// --- Icons
import External from 'components/icons/External'

// --- Others
import { isExternalLink } from 'lib/helper'

const Wrapper = ({ url = undefined, children, ...others }) => {
  if (!url) return <div {...others}>{children}</div>
  const isExternal = isExternalLink(url)

  if (isExternal) {
    return (
      <a href={url} {...others}>
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
    <div className="space-y-2">
      {primaryText && <div className="text-gray-500">{primaryText}</div>}
      <Wrapper
        url={url}
        className={`inline-block${url && isExternal ? ' relative' : ''}`}
        {...(url && {
          href: url
        })}
        {...(url &&
          isExternal && {
            href: url,
            rel: 'noopener noreferrer',
            target: '_blank'
          })}
        {...others}
      >
        <div
          className={
            url
              ? 'flex items-baseline relative -mb-px pb-px border-b border-solid border-transparent transition-colors duration-200 ease-in-out hover:border-black'
              : ''
          }
        >
          <p className="text-lg md:text-xl leading-snug md:leading-tight font-semibold">{title}</p>
          {url && isExternal && (
            <div className="ml-1.5">
              <External height={14} width={14} />
            </div>
          )}
        </div>
      </Wrapper>
      {secondaryText && <div className="text-gray-500">{secondaryText}</div>}
    </div>
  )
}

export default Card
