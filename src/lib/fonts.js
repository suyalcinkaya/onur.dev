import { cache } from 'react'
import 'server-only'

/**
 * Retrieves the regular font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the regular font file as an array buffer.
 */
export const getRegularFont = cache(async () => {
  const response = await fetch(new URL('@/assets/fonts/Geist-Regular.otf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
})

/**
 * Retrieves the bold font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the bold font file as an array buffer.
 */
export const getBoldFont = cache(async () => {
  const response = await fetch(new URL('@/assets/fonts/Geist-Medium.otf', import.meta.url))
  const font = await response.arrayBuffer()
  return font
})
