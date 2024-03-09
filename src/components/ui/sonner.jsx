import { Toaster as Sonner } from 'sonner'

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-gray-950 group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-gray-950 dark:group-[.toaster]:text-gray-50 dark:group-[.toaster]:border-gray-800',
          description: 'group-[.toast]:text-gray-500 dark:group-[.toast]:text-gray-400',
          actionButton:
            'group-[.toast]:bg-gray-900 group-[.toast]:text-gray-50 dark:group-[.toast]:bg-gray-50 dark:group-[.toast]:text-gray-900',
          cancelButton:
            'group-[.toast]:bg-gray-100 group-[.toast]:text-gray-500 dark:group-[.toast]:bg-gray-800 dark:group-[.toast]:text-gray-400'
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
