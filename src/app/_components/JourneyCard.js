const JourneyCard = ({ title, subtitle }) => {
  return (
    <div>
      <span className="word-break font-medium">{title}</span>
      {subtitle && <div className="word-break m-0 text-gray-500">{subtitle}</div>}
    </div>
  )
}

export default JourneyCard
