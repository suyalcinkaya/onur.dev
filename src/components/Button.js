import { Button as ChakraButton } from '@chakra-ui/core'
import styled from '@emotion/styled'

const StyledButton = styled(ChakraButton)`
  appearance: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  transition: all 250ms;

  @media not all and (hover: none) {
    &:hover,
    &:active {
      background-color: transparent;
    }

    &:focus {
      box-shadow: none;
    }
  }
`

const Button = (props) => <StyledButton {...props} />

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
