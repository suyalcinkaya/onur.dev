import * as React from 'react'

function SvgAbout(props) {
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
      <path d="M18.9 7a8 8 0 011.1 5v1a6 6 0 00.8 3M8 11a4 4 0 018 0v1a10 10 0 002 6" />
      <path d="M12 11v2a14 14 0 002.5 8M8 15a18 18 0 001.8 6M4.9 19a22 22 0 01-.9-7v-1a8 8 0 0112-6.95" />
    </svg>
  )
}

export default SvgAbout
