import { SVGProps } from "react"


const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 10v28M10 24h28"
      stroke="#000"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default PlusIcon
