const JourneyCard = ({ title, subtitle }) => {
  return (
    <div>
      <span className="font-medium word-break">{title}</span>
      {subtitle && <div className="m-0 text-gray-500 word-break">{subtitle}</div>}
    </div>
  )
}

export default JourneyCard
