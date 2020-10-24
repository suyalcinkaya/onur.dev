import { css } from '@emotion/core'

export const webkitOnly = (attrs) => css`
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    ${attrs};
  }
`
