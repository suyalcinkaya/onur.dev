const commonClassNames =
  'inline-flex appearance-none items-center transition-colors duration-200 ease-in-out select-none w-auto align-middle outline-none rounded-lg space-x-2 whitespace-nowrap cursor-pointer'

export const OutlineButton = ({ as = 'button', className = '', isExternal, ...others }) => {
  const Tag = as
  return (
    <Tag
      className={`${commonClassNames} ${className} text-sm h-8 glassmorphism hover:bg-gray-900 px-3`}
      {...(as === 'button' && {
        type: 'button'
      })}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...others}
    />
  )
}

export const GhostButton = ({ as = 'button', className, isExternal, ...others }) => {
  const Tag = as
  return (
    <Tag
      className={`${commonClassNames} ${className} bg-transparent px-4 h-10 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 hover:glassmorphism`}
      {...(as === 'button' && {
        type: 'button'
      })}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...others}
    />
  )
}

export const LinkButton = ({ as = 'a', className = '', isExternal, ...others }) => {
  const Tag = as
  return (
    <Tag
      className={`${commonClassNames} ${className} leading-normal p-0 underline-under hover:underline`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...others}
    />
  )
}
