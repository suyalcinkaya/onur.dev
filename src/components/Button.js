import { forwardRef } from 'react'
import styled from '@emotion/styled'

const commonClassNames =
  'inline-flex appearance-none items-center transition-all duration-200 ease-in-out select-none w-auto align-middle outline-none rounded-md font-semibold space-x-2'

const StyledButton = styled.button``

const Button = forwardRef((props, ref) => {
  let {
    children,
    className = '',
    colorScheme = 'primary-default',
    isExternal,
    variant = 'solid',
    size,
    ...others
  } = props

  StyledButton.defaultProps = {
    as: variant === 'link' && 'a',
    type: 'button',
    className: commonClassNames,
    rel: isExternal && 'noopener noreferrer',
    target: isExternal && '_blank',
    role: 'button'
  }

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
      className += ' border border-gray-200 bg-white hover:bg-gray-100 text-black px-3'
      break
    case 'ghost':
      className += ' bg-transparent hover:bg-gray-100 px-3'
      break
    case 'link':
      className += ' p-0 text-inherit hover:underline'
      break
    default:
      className += ' border border-black bg-black hover:bg-white text-white hover:text-black px-3'
      break
  }

  return (
    <StyledButton ref={ref} className={`${commonClassNames} ${className}`} {...others}>
      {children}
    </StyledButton>
  )
})

export default Button
