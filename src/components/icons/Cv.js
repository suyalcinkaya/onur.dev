import * as React from 'react'

function SvgCv(props) {
  return (
    <svg
      className=""
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M15 21H6a3 3 0 01-3-3v-1h10v2a2 2 0 004 0V5a2 2 0 112 2h-2m2-4H8a3 3 0 00-3 3v11M9 7h4M9 11h4" />
    </svg>
  )
}

export default SvgCv
