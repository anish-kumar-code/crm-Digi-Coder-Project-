import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/signin'
import Layout from './LayoutSuperAdmin'
import AdminLeads from './pages/adminPanel/leads/AdminLeads'
import Leads from './pages/dashboard/productPage/Leads'
import Dashboard from './pages/dashboard/dashboardPage/dashboard'

import Employee from './pages/dashboard/employeePage/Employee'
import AddEmployee from './pages/dashboard/employeePage/addEmployeePage/AddEmployee'
import AddLead from './pages/dashboard/productPage/addLeadPage/AddLead'
import NotFound from './pages/not-found/index'
import SettingsLayout from './pages/setting/layout'
import SettingsProfilePage from './pages/setting/page'
import LeadDetails from './pages/dashboard/productPage/leadDetails'
import { Toaster } from '@/components/ui/toaster'
import LayoutAdmin from './LayoutAdmin'
import DashboardAdmin from './pages/adminPanel/dashboard/DashboardAdmin'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard/leads' element={<Leads />} />
          <Route path='/dashboard/leads/:id' element={<LeadDetails />} />
          <Route path='/dashboard/leads/addLead' element={<AddLead />} />
          <Route path='/dashboard/employee' element={<Employee />} />
          <Route
            path='/dashboard/employee/addEmployee'
            element={<AddEmployee />}
          />
        </Route>
        <Route path='/AdminDashboard' element={<LayoutAdmin></LayoutAdmin>}>
          <Route index element={<DashboardAdmin />} />
          <Route path='/AdminDashboard/leads' element={<AdminLeads />} />
        </Route>
        <Route path='/settings' element={<SettingsLayout />}>
          <Route index element={<SettingsProfilePage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
