const commonClassNames =
  'inline-flex appearance-none items-center transition-colors duration-200 ease-in-out select-none w-auto align-middle outline-none rounded-lg space-x-2 whitespace-nowrap cursor-pointer'

export const OutlineButton = ({ as = 'button', className = '', isExternal, ...others }) => {
  const Tag = as
  return (
    <Tag
      className={`${commonClassNames} ${className} text-sm h-8 border border-gray-600 bg-gray-600 hover:bg-gray-700 px-3`}
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
      className={`${commonClassNames} bg-transparent hover:bg-gray-700 px-4 h-10 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50`}
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
