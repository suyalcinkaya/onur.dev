import { forwardRef } from 'react'

export const GhostButton = forwardRef(({ className, isExternal, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      className={`flex flex-none items-center justify-between gap-x-1.5 cursor-pointer leading-none transition-colors font-medium px-3 py-2 md:px-4 md:py-2.5 text-sm rounded-lg text-gray-700 bg-white ${className}`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...rest}
    />
  )
})

export const OutlineButton = forwardRef(({ className, isExternal, ...rest }, ref) => {
  return (
    <a
      ref={ref}
      className={`flex flex-none items-center justify-between gap-x-1.5 cursor-pointer leading-none transition-all font-medium px-4 py-2.5 text-sm rounded-lg text-gray-700 hover:text-gray-900 shadow-xs bg-white border border-gray-400 border-opacity-30 hover:border-opacity-50 hover:shadow-sm ${className}`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...rest}
    />
  )
})
