const JourneyCard = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-y-1 rounded-lg">
      <p className="m-0 font-medium word-break">{title}</p>
      {subtitle && <p className="m-0 text-sm text-gray-500 word-break">{subtitle}</p>}
    </div>
  )
}

export default JourneyCard
