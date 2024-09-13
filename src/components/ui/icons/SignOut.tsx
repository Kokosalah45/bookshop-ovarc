import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSignOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.314 8.063 20.25 12l-3.936 3.938M9.75 12h10.497M9.75 20.25H4.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h5.25"
    />
  </svg>
)
export default SvgSignOut
