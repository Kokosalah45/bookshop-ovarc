import * as React from 'react'
import type { SVGProps } from 'react'
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="#fff" clipPath="url(#shopping-cart_svg__a)">
      <path d="M5.155 10.344h8.501c.21 0 .393-.139.45-.34l1.876-6.563a.47.47 0 0 0-.45-.597H4.073l-.335-1.508A.47.47 0 0 0 3.28.969H.47a.469.469 0 1 0 0 .937h2.436l1.693 7.616a1.41 1.41 0 0 0-.848 1.29c0 .776.63 1.407 1.406 1.407h8.5a.469.469 0 1 0 0-.938h-8.5a.47.47 0 0 1-.001-.937M14.91 3.78l-1.607 5.625h-7.77l-1.25-5.625z" />
      <path d="M4.688 13.625c0 .775.63 1.406 1.406 1.406s1.406-.63 1.406-1.406-.63-1.406-1.406-1.406-1.407.63-1.407 1.406m1.406-.469a.47.47 0 1 1-.002.939.47.47 0 0 1 .002-.939M11.313 13.625c0 .775.63 1.406 1.406 1.406s1.406-.63 1.406-1.406-.63-1.406-1.406-1.406-1.406.63-1.406 1.406m1.406-.469a.47.47 0 1 1-.001.939.47.47 0 0 1 0-.939" />
    </g>
    <defs>
      <clipPath id="shopping-cart_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgShoppingCart
