import * as React from 'react'

function SvgProjects(props) {
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
      <rect x={4} y={4} width={6} height={5} rx={2} />
      <rect x={4} y={13} width={6} height={7} rx={2} />
      <rect x={14} y={4} width={6} height={7} rx={2} />
      <rect x={14} y={15} width={6} height={5} rx={2} />
    </svg>
  )
}

export default SvgProjects
