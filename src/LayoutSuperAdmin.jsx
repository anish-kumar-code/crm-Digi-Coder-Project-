import { Outlet } from 'react-router-dom'
import Sidebar from './components/shared/SidebarEmployee'

function Layout() {
  return (
    <>
      <Sidebar>
        <Outlet></Outlet>
      </Sidebar>
    </>
  )
}

export default Layout
