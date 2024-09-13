import * as React from 'react'
import type { SVGProps } from 'react'
const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M20.438 2.813h-3.516v-.704C16.922.946 15.976 0 14.812 0H9.189c-1.164 0-2.11.946-2.11 2.11v.703H3.562c-1.163 0-2.109.946-2.109 2.109 0 .934.61 1.728 1.453 2.004l1.255 15.14A2.12 2.12 0 0 0 6.263 24h11.474c1.089 0 2.012-.85 2.103-1.935l1.253-15.139a2.11 2.11 0 0 0 1.454-2.004c0-1.163-.946-2.11-2.11-2.11M8.484 2.109c0-.387.316-.703.704-.703h5.624c.388 0 .704.316.704.703v.704H8.484zm9.954 19.84a.707.707 0 0 1-.7.645H6.262a.707.707 0 0 1-.7-.645L4.325 7.031h15.348zm2-16.324H3.563a.704.704 0 0 1 0-1.406h16.875a.704.704 0 0 1 0 1.406"
    />
    <path
      fill="#fff"
      d="M9.186 20.44 8.483 9.098a.704.704 0 0 0-1.404.087l.704 11.344a.703.703 0 1 0 1.403-.087M16.262 8.439a.704.704 0 0 0-.745.658l-.703 11.344a.703.703 0 0 0 1.403.087l.704-11.344a.703.703 0 0 0-.659-.745M12.107 8.33a.703.703 0 0 0-.703.703v11.344a.703.703 0 0 0 1.406 0V9.033a.703.703 0 0 0-.703-.703"
    />
  </svg>
)
export default SvgBin
