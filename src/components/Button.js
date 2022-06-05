import { forwardRef } from 'react'

const commonClassNames =
  'inline-flex appearance-none items-center transition-colors duration-200 ease-in-out select-none w-auto align-middle outline-none rounded-lg space-x-2 whitespace-nowrap cursor-pointer'

export const GhostButton = forwardRef(({ as = 'button', className, isExternal, ...others }, ref) => {
  const Tag = as
  return (
    <Tag
      ref={ref}
      className={`${commonClassNames} ${className} bg-transparent px-4 py-1.5 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50`}
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
})

export const Button = (props) => {
  return (
    <button
      className="flex space-x-2 flex-none items-center justify-center cursor-pointer leading-none transition-all px-3 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-1000 shadow-xs bg-white border border-gray-400 border-opacity-30 hover:border-opacity-50 hover:shadow-sm"
      {...props}
    />
  )
}

export const Button2 = (props) => {
  return (
    <a
      className="flex items-center justify-center rounded-md px-3 py-2 space-x-2 text-sm hover:bg-gray-100"
      {...props}
    />
  )
}
