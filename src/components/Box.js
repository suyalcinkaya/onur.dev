import styled from 'styled-components'
import {
  border,
  borderRadius,
  color,
  compose,
  flexbox,
  grid,
  layout,
  size,
  shadow,
  space,
  position,
  typography
} from 'styled-system'

const Box = styled.div(
  compose(
    border,
    borderRadius,
    color,
    flexbox,
    grid,
    size,
    space,
    layout,
    position,
    shadow,
    typography
  )
)

export default Box
