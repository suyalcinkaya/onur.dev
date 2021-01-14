import styled from '@emotion/styled'

const Button = styled.button``

// --- Others
import { isExternalLink } from 'lib/helper'

const IconButton = ({ href, name, children, ...others }) => {
  const isExternal = href ? isExternalLink(href) : false
  return (
    <Button
      href={href}
      target={isExternal && '_blank'}
      rel={isExternal && 'noopener noreferrer'}
      aria-label={name}
      title={name}
      className="inline-flex items-center justify-items-center bg-transparent hover:text-gray-700 transition-colors duration-200 h-8 min-w-8"
      {...others}
    >
      {children}
    </Button>
  )
}

export default IconButton
