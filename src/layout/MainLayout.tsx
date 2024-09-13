import PageContent from '@/components/layout/PageContent'
import Sidebar from '@/components/layout/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="grid-cols-main-layout  md:grid min-h-screen relative">
      <Sidebar />
      <PageContent>
        <Outlet />
      </PageContent>
    </div>
  )
}

export default MainLayout
