import { forwardRef } from 'react'

export const GhostButton = forwardRef(({ as = 'a', className, isExternal, ...rest }, ref) => {
  const As = as
  return (
    <As
      ref={ref}
      className={`btn transition-colors px-3 py-2 md:px-4 md:py-2.5 ${className}`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...rest}
    />
  )
})

export const OutlineButton = forwardRef(({ as = 'a', className, isExternal, ...rest }, ref) => {
  const As = as
  return (
    <As
      ref={ref}
      className={`btn transition-all px-4 py-2.5 shadow-xs border border-gray-400 border-opacity-30 hover:border-opacity-50 hover:shadow-sm ${className}`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...rest}
    />
  )
})
