import { forwardRef } from 'react'

const commonClasses =
  'flex flex-none items-center justify-between gap-x-1.5 text-sm font-medium text-gray-700 leading-none bg-white rounded-lg cursor-pointer'

export const GhostButton = forwardRef(({ as = 'a', className, isExternal, ...rest }, ref) => {
  const As = as
  return (
    <As
      ref={ref}
      className={`${commonClasses} transition-colors px-3 py-2 md:px-4 md:py-2.5 ${className}`}
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
      className={`${commonClasses} transition-all px-4 py-2.5 hover:text-gray-900 shadow-xs border border-gray-400 border-opacity-30 hover:border-opacity-50 hover:shadow-sm ${className}`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...rest}
    />
  )
})
