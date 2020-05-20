import styled from '@emotion/styled'
import {
  border,
  borderRadius,
  color,
  compose,
  flexbox,
  layout,
  size,
  shadow,
  space,
  position,
  typography
} from 'styled-system'

// --- Others
import theme from 'utils/theme'

const StyledButton = styled.button`
  appearance: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  transition: all 250ms;

  &:hover {
    background-color: ${theme.colors.gray200};
  }

  &:active {
    background-color: ${theme.colors.gray300};
  }
`

const Button = styled(StyledButton)(
  compose(border, borderRadius, color, flexbox, size, space, layout, position, shadow, typography)
)

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
  height: '2.875rem',
  minWidth: '3rem',
  border: 'none',
  backgroundColor: 'transparent'
}

export default Button
