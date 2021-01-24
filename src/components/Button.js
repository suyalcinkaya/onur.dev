import { forwardRef } from 'react'

const commonClassNames =
  'inline-flex appearance-none items-center transition-colors duration-200 ease-in-out select-none w-auto align-middle outline-none rounded-md font-medium space-x-2'

const Wrapper = forwardRef(({ as, variant, children, ...others }, ref) => {
  if (variant === 'link' || as === 'a') {
    return (
      <a ref={ref} {...others}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} {...others}>
      {children}
    </button>
  )
})

const Button = forwardRef((props, ref) => {
  let { children, className = '', isExternal, variant = 'solid', size, ...others } = props

  if (size === 'sm') {
    className += ' text-sm leading-loose h-8 min-w-8'
  } else {
    className += ` text-base leading-tight${variant !== 'link' ? ' h-10 min-h-10' : ''}`
  }

  switch (variant) {
    case 'solid':
      className += ' border border-black bg-black hover:bg-white text-white hover:text-black px-3'
      break
    case 'outline':
      className += ' border border-gray-200 bg-white hover:bg-gray-100 text-black px-3 shadow-normal'
      break
    case 'ghost':
      className += ' bg-transparent hover:bg-gray-100 px-3 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
      break
    case 'link':
      className += ' p-0 text-inherit underline-under hover:underline'
      break
    default:
      className += ' border border-black bg-black hover:bg-white text-white hover:text-black px-3'
      break
  }

  return (
    <Wrapper
      ref={ref}
      type="button"
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        role: 'button'
      })}
      className={`${commonClassNames} ${className}`}
      {...others}
    >
      {children}
    </Wrapper>
  )
})

export default Button
