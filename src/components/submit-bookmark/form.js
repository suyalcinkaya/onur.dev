'use client'

import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
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

export function SubmitBookmarkForm({ className, setFormOpen, bookmarkCollections, currentBookmarkCollection }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    // mode: 'onChange',
    defaultValues: {
      url: '',
      email: '',
      type: currentBookmarkCollection?.title ?? ''
    }
  })

  function onSubmit(values) {
    setFormOpen(false)

    const { hostname } = new URL(values.url)
    toast('Bookmark submitted!', {
      type: 'success',
      description: (
        <span>
          <span className="underline underline-offset-4">{hostname}</span> has been submitted. Thank you!
        </span>
      )
    })
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
                <Input placeholder="john@doe.com" {...field} />
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
                  {bookmarkCollections.map((collection) => (
                    <SelectItem key={collection.slug} value={collection.title}>
                      {collection.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Optional but helps me categorize the bookmark.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}
