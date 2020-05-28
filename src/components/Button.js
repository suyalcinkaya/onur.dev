import { forwardRef } from 'react'
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
import useColorMode from 'hooks/useColorMode'

const StyledButton = styled.button`
  appearance: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  transition: all 250ms;

  @media not all and (hover: none) {
    &:hover {
      background-color: ${(props) => (props.colorMode === 'light' ? '#edeef0' : 'rgba(255, 255, 255, 0.08)')};
    }

    &:active {
      background-color: ${theme.colors.gray300};
    }
  }
`

const Btn = styled(StyledButton)(
  compose(border, borderRadius, color, flexbox, size, space, layout, position, shadow, typography)
)

const Button = forwardRef((props, ref) => {
  const { colorMode } = useColorMode()
  return <Btn ref={ref} colorMode={colorMode} {...props} />
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
  backgroundColor: 'transparent'
}

export default Button
