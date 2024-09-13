import * as React from 'react'
import type { SVGProps } from 'react'
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M23.253 2.92 21.078.745a2.55 2.55 0 0 0-3.604 0L1.294 16.927a.7.7 0 0 0-.195.37L.012 23.168a.703.703 0 0 0 .82.82L6.702 22.9a.7.7 0 0 0 .37-.195l16.18-16.181a2.547 2.547 0 0 0 0-3.605M1.58 22.42l.657-3.553 2.895 2.894zm4.994-1.205-3.79-3.79 13.838-13.84 3.79 3.79zM22.26 5.53l-.852.852-3.79-3.791.851-.851a1.143 1.143 0 0 1 1.616 0l2.175 2.175a1.14 1.14 0 0 1 0 1.615"
    />
  </svg>
)
export default SvgEdit
