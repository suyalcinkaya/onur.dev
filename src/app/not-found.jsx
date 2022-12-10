import PageTitle from '@/components/PageTitle'
import { OutlineButton } from '@/components/Button'

export default function NotFound() {
  return (
    <div className="content">
      <PageTitle title="Not found" />
      <p>This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here...</p>
      <OutlineButton href="/" className="w-fit">
        Go home
      </OutlineButton>
    </div>
  )
}
