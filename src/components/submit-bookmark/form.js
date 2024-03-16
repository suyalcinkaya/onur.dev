'use client'

import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { submitBookmark } from '@/app/actions'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  url: z.string().url({
    message: 'Invalid URL.'
  }),
  email: z.string().email({
    message: 'Invalid email address.'
  }),
  type: z.string().optional()
})

export function SubmitBookmarkForm({ className, setFormOpen, bookmarks, currentBookmark }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    // mode: 'onChange',
    defaultValues: {
      url: '',
      email: '',
      type: currentBookmark?.title ?? ''
    }
  })
  const {
    formState: { isSubmitting, errors },
    setError
  } = form
  const hasErrors = Object.keys(errors).length > 0

  async function onSubmit(values) {
    try {
      await submitBookmark(values)

      toast('Bookmark submitted!', {
        type: 'success',
        description: (
          <span>
            <span className="underline underline-offset-4">{values.url}</span> has been submitted. Thank you!
          </span>
        )
      })
    } catch (error) {
      setError('api.limitError', {
        type: 'manual',
        message: error.message
      })
      toast.error(error.message)
    } finally {
      setFormOpen(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-6', className)}>
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a bookmark type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {bookmarks.map((bookmark) => (
                    <SelectItem key={bookmark.slug} value={bookmark.title}>
                      {bookmark.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Optional but helps me categorize the bookmark.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting || errors?.api?.limitError}>
          {hasErrors ? (
            'Submit'
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isSubmitting ? 'summitting' : 'submit'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </motion.span>
            </AnimatePresence>
          )}
        </Button>
      </form>
    </Form>
  )
}
