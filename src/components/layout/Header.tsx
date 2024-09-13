import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'

const MainPageMap = {
  authors: 'Author',
  stores: 'Stores',
  books: 'Books',
  shop: 'Shop',
  admin: 'Admin',
} as const

const CurrentPageViewer = () => {
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter(Boolean)

  const nameSpace = pathParts[0]
  const entity = pathParts.length > 1 ? pathParts[1] : ''

  const projectedPath = entity ? entity : nameSpace

  return (
    <div className="flex">
      <h2 className="text-2xl font-medium">
        {MainPageMap[projectedPath as keyof typeof MainPageMap]}
      </h2>
    </div>
  )
}

const Breadcrumbs = () => {
  const breadcrumbs = useReactRouterBreadcrumbs().filter(
    (key) => key.key !== '/',
  )

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-1">
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <>
            <li key={index}>
              <NavLink to={match.pathname}>{breadcrumb}</NavLink>
            </li>
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </>
        ))}
      </ol>
    </nav>
  )
}

const Avatar = () => {
  return (
    <div className="flex items-center space-x-3">
      <figure className="rounded-md overflow-hidden">
        <img
          width={60}
          height={60}
          src="https://randomuser.me/api/portraits/men/60.jpg"
        />
      </figure>
      <span
        className="
          text-2xl
        "
      >
        John Doe
      </span>
    </div>
  )
}

const Header = () => {
  return (
    <header className="bg-[#F1F1F1] mb-[20px] py-[20px] border-b-[1px] border-black space-y-2 flex justify-between items-center">
      <div>
        <CurrentPageViewer />
        <Breadcrumbs />
      </div>

      <Avatar />
    </header>
  )
}

export default Header
