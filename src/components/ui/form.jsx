import { Slot } from '@radix-ui/react-slot'
import { createContext, memo, useContext, useId, useMemo } from 'react'
import { Controller, FormProvider, useFormContext } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const Form = FormProvider

const FormFieldContext = createContext({})

const FormField = memo(({ ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      {useMemo(
        () => (
          <Controller {...props} />
        ),
        [props]
      )}
    </FormFieldContext.Provider>
  )
})
FormField.displayName = 'FormField'

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

const FormItemContext = createContext({})

const FormItem = memo(({ className, children }) => {
  const id = useId()
  const value = useMemo(() => ({ id }), [id])

  return (
    <FormItemContext.Provider value={value}>
      <div className={cn('flex flex-col gap-2', className)}>{children}</div>
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const FormLabel = memo(({ className, ...props }) => {
  const { error, formItemId } = useFormField()

  return <Label className={cn(error && 'text-red-500', className)} htmlFor={formItemId} {...props} />
})
FormLabel.displayName = 'FormLabel'

const FormControl = memo(({ ...props }) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

const FormDescription = memo(({ className, ...props }) => {
  const { formDescriptionId } = useFormField()

  return <p id={formDescriptionId} className={cn('text-xs text-gray-500', className)} {...props} />
})
FormDescription.displayName = 'FormDescription'

const FormMessage = memo(({ className, children, ...props }) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p id={formMessageId} className={cn('mb-0 text-xs font-medium text-red-500', className)} {...props}>
      {body}
    </p>
  )
})
FormMessage.displayName = 'FormMessage'

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField }
