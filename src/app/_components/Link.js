import dynamic from 'next/dynamic'
const DynamicNextLink = dynamic(() => import('next/link'))

import { isExternalLink } from '@/lib/utils'

const Link = ({ href = '#', ...rest }) => {
  const isExternal = isExternalLink(href)
  if (!isExternal) {
    return <DynamicNextLink href={href} className="link" {...rest} />
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link break-words after:content-['_↗']"
      {...rest}
    />
  )
}

export default Link
