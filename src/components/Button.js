import { forwardRef } from 'react'
import { Button as ChakraButton } from '@chakra-ui/core'
import styled from '@emotion/styled'

// --- Others
import theme from 'styles/theme'
import useColorMode from 'hooks/useColorMode'

const StyledButton = styled(ChakraButton)`
  appearance: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  transition: all 250ms;

  @media not all and (hover: none) {
    &:hover {
      background-color: ${(props) => (props.systemTheme === 'light' ? '#edeef0' : 'rgba(255, 255, 255, 0.08)')};
    }

    &:active {
      background-color: ${theme.colors.gray300};
    }
  }
`

const Button = forwardRef((props, ref) => {
  const { systemTheme } = useColorMode()
  return <StyledButton ref={ref} systemTheme={systemTheme} {...props} />
})

Button.defaultProps = {
  display: 'inline-flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
  py: 0,
  px: { _: '0.475rem', md: '1.125rem' },
  background: 'transparent',
  color: 'inherit',
  height: '2.5rem',
  minWidth: '2.5rem',
  border: 'none',
  backgroundColor: 'transparent',
  transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  transitionTimingFunction: 'cubic-bezier(.4, 0, .2, 1)',
  transitionDuration: '.15s'
}

export default Button
