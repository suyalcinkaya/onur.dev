import { css } from '@emotion/react'

export const safariOnly = (attrs) => css`
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      ${attrs};
    }
  }
`

export const ogImageUrl = (text) => {
  const encodedText = encodeURIComponent(text)
  return `https://og-onurdev.vercel.app/${encodedText}.png?md=1&fontSize=120px&images=https%3A%2F%2Fonur.dev%2Fimages%2Fme.svg`
}
