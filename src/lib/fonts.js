import { readFile } from 'node:fs/promises'

import { cache } from 'react'

/**
 * Retrieves the regular font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the regular font file as an array buffer.
 */
export const getRegularFont = cache(async () => {
  const response = await readFile('src/assets/fonts/Geist-Regular.otf')
  const font = Uint8Array.from(response).buffer

  return font
})

/**
 * Retrieves the bold font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the bold font file as an array buffer.
 */
export const getBoldFont = cache(async () => {
  const response = await readFile('src/assets/fonts/Geist-Medium.otf')
  const font = Uint8Array.from(response).buffer
  return font
})
