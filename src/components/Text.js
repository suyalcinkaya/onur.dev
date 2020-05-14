import styled from 'styled-components'
import { compose, color, size, typography, space } from 'styled-system'

const Text = styled.span(compose(typography, space, color, size))

export default Text
