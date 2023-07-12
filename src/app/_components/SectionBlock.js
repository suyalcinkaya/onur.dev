import NextLink from 'next/link'

import { isExternalLink } from '@/lib/utils'

const SectionBlock = ({ title, href, children, ...rest }) => {
  let isExternal = false
  if (href) isExternal = isExternalLink(href)

  return (
    <div className="flex flex-col gap-4" {...rest}>
      {href ? (
        isExternal ? (
          <a href={href} target="_blank" rel="noreferrer" className="self-start text-gray-500">
            {title}
          </a>
        ) : (
          <NextLink href={href} className="self-start text-gray-500">
            {title}
          </NextLink>
        )
      ) : (
        <p className="m-0 text-gray-500">{title}</p>
      )}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

export default SectionBlock
