import Markdown from '@/app/_components/Markdown'

const JourneyCard = ({ title, subtitle }) => {
  return (
    <div>
      <span className="word-break font-medium">{title}</span>
      {subtitle && <Markdown className="word-break m-0 block w-full text-slate-500">{subtitle}</Markdown>}
    </div>
  )
}

export default JourneyCard
