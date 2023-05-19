import { SVGProps } from "react"

const CollapseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 24h28"
      stroke="#FFEEC8"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CollapseIcon
