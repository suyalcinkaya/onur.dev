import { forwardRef } from 'react'

export const GhostButton = forwardRef(({ className, isExternal, ...others }, ref) => {
  return (
    <a
      ref={ref}
      className={`flex space-x-1.5 flex-none items-center justify-center cursor-pointer leading-none transition-colors font-medium px-3 py-2 md:px-4 md:py-2.5 text-sm rounded-lg text-gray-700 bg-white ${className}`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      {...others}
    />
  )
})

export const OutlineButton = ({ className, ...rest }) => {
  return (
    <a
      className={`flex space-x-1.5 flex-none items-center justify-center cursor-pointer leading-none transition-all font-medium px-4 py-2.5 text-sm rounded-lg text-gray-700 hover:text-gray-900 shadow-xs bg-white border border-gray-400 border-opacity-30 hover:border-opacity-50 hover:shadow-sm ${className}`}
      {...rest}
    />
  )
}
