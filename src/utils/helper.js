import { css } from '@emotion/core'

export const safariOnly = (attrs) => css`
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      ${attrs};
    }
  }
`
