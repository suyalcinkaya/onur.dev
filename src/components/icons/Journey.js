import * as React from 'react'

function SvgJourney(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <circle cx={6} cy={19} r={2} />
      <circle cx={18} cy={5} r={2} />
      <path d="M12 19h4.5a3.5 3.5 0 000-7h-8a3.5 3.5 0 010-7H12" />
    </svg>
  )
}

export default SvgJourney
