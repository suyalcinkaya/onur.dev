import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'

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
