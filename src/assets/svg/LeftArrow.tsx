import { SVGProps } from "react"
const LeftArrow = (props: SVGProps<SVGSVGElement> & {color?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={82}
    height={82}
    fill="none"
    {...props}
  >
    <circle cx={41} cy={41} r={40} stroke={props?.color ? "#261F0E" : "#FFEEC8"} strokeDasharray="4 4" />
    <path
      fill={props?.color ? "#261F0E" : "#FFEEC8"}
      d="M30.646 40.646a.5.5 0 0 0 0 .708l3.182 3.181a.5.5 0 1 0 .707-.707L31.707 41l2.828-2.828a.5.5 0 1 0-.707-.707l-3.182 3.181ZM31 41.5h20v-1H31v1Z"
    />
  </svg>
)
export default LeftArrow
