import * as React from 'react'

function SvgCoffee(props) {
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
      <path d="M5 6h10a1 1 0 011 1v8a4 4 0 01-4 4H8a4 4 0 01-4-4V7a1 1 0 011-1M16 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
    </svg>
  )
}

export default SvgCoffee
