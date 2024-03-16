import { cache } from 'react'
import 'server-only'

/**
 * Retrieves the SpaceGrotesk-Medium font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the SpaceGrotesk-Medium font file as an array buffer.
 */
export const getMediumFont = cache(async () => {
  const response = await fetch(new URL('@/assets/fonts/SpaceGrotesk-Medium.ttf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
})

/**
 * Retrieves the SpaceGrotesk-SemiBold font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the SpaceGrotesk-SemiBold font file as an array buffer.
 */
export const getBoldFont = cache(async () => {
  const response = await fetch(new URL('@/assets/fonts/SpaceGrotesk-SemiBold.ttf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
})
