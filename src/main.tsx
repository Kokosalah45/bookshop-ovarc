import { PropsWithChildren, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import BooksAdminPage from './pages/BooksAdminPage'
import BooksShopPage from './pages/BooksShopPage'
import ShopPage from './pages/ShopPage'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  const { worker } = await import('./mocks/browser')

  return worker.start()
}

const ShopRedirecter = ({ children }: PropsWithChildren) => {
  const location = useLocation()

  if (location.pathname === '/') {
    return <Navigate to="/shop" />
  }

  return <>{children}</>
}

export const routesConfig = [
  {
    path: '/',
    element: (
      <ShopRedirecter>
        <MainLayout />
      </ShopRedirecter>
    ),
    children: [
      {
        path: '/shop',
        element: <ShopPage />,
        children: [],
      },

      {
        path: '/shop/books',
        element: <BooksShopPage />,
      },

      {
        path: '/admin',
        children: [
          {
            path: 'books',
            element: <BooksAdminPage />,
          },
        ],
      },
    ],
  },
]

const router = createBrowserRouter(routesConfig)

const queryClient = new QueryClient()
enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
})
