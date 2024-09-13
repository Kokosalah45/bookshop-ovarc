import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo } from '../ui/icons'
import SvgBook from '../ui/icons/Book'
import SvgFeatherPen from '../ui/icons/FeatherPen'
import SvgHome from '../ui/icons/Home'
import SvgShop from '../ui/icons/Shop'
import SvgSignOut from '../ui/icons/SignOut'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <div className="md:hidden absolute top-0 left-0  z-[2]">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-200">
          hamburger
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'grid' : 'hidden '
        } fixed md:grid grid-rows-sidebar-layout md:w-sidebar h-screen w-full bg-white z-[1]`}
      >
        <div className="flex items-center justify-center h-[120px] ">
          <BrandLogo />
        </div>
        <nav>
          <ul className="px-[30px] py-[20px] h-full space-y-5">
            <li>
              <Link
                className=" space-x-2 flex items-center justify-center md:justify-start p-2"
                to={'/shop'}
              >
                <SvgHome />
                <span
                  className="
                  text-[#131313]
                "
                >
                  Shop
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="space-x-2 flex items-center justify-center md:justify-start p-2"
                to={'/admin/stores'}
              >
                <SvgShop />
                <span
                  className="
                  text-[#131313]
                "
                >
                  Stores
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="space-x-2 flex items-center justify-center md:justify-start p-2"
                to={'/admin/authors'}
              >
                <SvgFeatherPen />
                <span
                  className="
                  text-[#131313]
                "
                >
                  Authors
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="space-x-2 flex items-center justify-center md:justify-start p-2"
                to={'/admin/books'}
              >
                <SvgBook />
                <span
                  className="
                  text-[#131313]
                "
                >
                  Books
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="px-[30px] py-[20px] flex justify-center">
          <button className="flex space-x-3">
            <SvgSignOut />
            <span>logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Sidebar
