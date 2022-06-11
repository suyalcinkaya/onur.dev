// --- Others
import { isExternalLink } from 'lib/helper'

const IconButton = ({ href, name, children, ...rest }) => {
  const isExternal = href ? isExternalLink(href) : false

  return (
    <button
      href={href}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      aria-label={name}
      title={name}
      className="inline-flex items-center justify-items-center bg-transparent hover:text-gray-500 transition-colors duration-200 h-8 min-w-8"
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton
