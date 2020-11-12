import { css } from '@emotion/react'

export const safariOnly = (attrs) => css`
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      ${attrs};
    }
  }
`
