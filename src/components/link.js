import NextLink from 'next/link'

import { isExternalLink } from '@/lib/utils'

export const Link = ({ href = '#', ...rest }) => {
  const isExternal = isExternalLink(href)
  if (isExternal) {
    const hrefObj = new URL(href)
    hrefObj.searchParams.set('ref', 'onur.dev')

    return (
      <a
        href={hrefObj.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className="link break-words after:content-['_↗']"
        {...rest}
      />
    )
  }

  return <NextLink href={href} className="link" {...rest} />
}
