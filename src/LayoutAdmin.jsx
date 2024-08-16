import { Outlet } from 'react-router-dom'
import SidebarAdmin from './components/shared/SidebarAdmin'

function LayoutAdmin() {
  return (
    <>
      <SidebarAdmin>
        <Outlet></Outlet>
      </SidebarAdmin>
    </>
  )
}

export default LayoutAdmin
