import FloatingHeader from '@/app/_components/FloatingHeader'
import PageTitle from '@/app/_components/PageTitle'

export function NotFound() {
  return (
    <div className="relative flex w-full flex-col">
      <FloatingHeader />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Not found" />
          <p>This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here...</p>
        </div>
      </div>
    </div>
  )
}
