export const LoadingSpinner = () => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <div
        className="inline-block h-4 w-4 animate-spin rounded-full border-[2px] border-current border-t-transparent text-black"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
