import { z } from 'zod'

export const formSchema = z.object({
  url: z.string().url({
    message: 'Invalid URL.'
  }),
  email: z.string().email({
    message: 'Invalid email address.'
  }),
  type: z.string().optional().or(z.literal(''))
})
