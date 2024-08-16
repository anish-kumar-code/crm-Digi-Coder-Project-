import { Link, Outlet, useLocation } from 'react-router-dom'
import { Bell, Home, Menu, Package, Package2, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function SidebarAdmin() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[275px_1fr]'>
        <div className='hidden border-r bg-muted/40 md:block'>
          <div className='sticky top-0 flex flex-col h-full max-h-screen gap-2 '>
            <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
              <Link to='/' className='flex items-center gap-2 font-semibold'>
                <Package2 className='w-6 h-6' />
                <span className=''>DigiCoders</span>
              </Link>
            </div>
            <div className='flex-1 '>
              <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                <Link
                  to='/AdminDashboard'
                  className={`flex items-center gap-3 px-3 py-2 transition-all rounded-lg ${
                    location.pathname === '/AdminDashboard'
                      ? 'bg-muted text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}>
                  <Home className='w-4 h-4' />
                  Dashboard
                </Link>

                <Link
                  to='/AdminDashboard/leads'
                  className={`flex items-center gap-3 px-3 py-2 transition-all rounded-lg ${
                    location.pathname === '/AdminDashboard/leads' ||
                    location.pathname === '/AdminDashboard/leads/addLead'
                      ? 'bg-muted text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}>
                  <Package className='w-4 h-4' />
                  Leads
                </Link>
                <Link
                  to='/AdminDashboard/employee'
                  className={`flex items-center gap-3 px-3 py-2 transition-all rounded-lg ${
                    location.pathname === '/AdminDashboard/employee' ||
                    location.pathname === '/AdminDashboard/employee/addEmployee'
                      ? 'bg-muted text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}>
                  <Users className='w-4 h-4' />
                  Employees
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className='flex flex-col'>
          <header className='sticky top-0 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='shrink-0 md:hidden'>
                  <Menu className='w-5 h-5' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left' className='flex flex-col'>
                <nav className='grid gap-2 text-lg font-medium'>
                  <Link
                    to='/'
                    className='flex items-center gap-2 text-lg font-semibold'>
                    <Package2 className='w-6 h-6' />
                    <span className=''>DigiCoders </span>
                  </Link>
                  <Link
                    to='/AdminDashboard/'
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                      location.pathname === '/AdminDashboard/'
                        ? 'bg-muted text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}>
                    <Home className='w-5 h-5' />
                    Dashboard
                  </Link>

                  <Link
                    to='/AdminDashboard/leads'
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                      location.pathname === '/AdminDashboard/leads'
                        ? 'bg-muted text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}>
                    <Package className='w-5 h-5' />
                    Leads
                  </Link>
                  <Link
                    to='/AdminDashboard/employee'
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                      location.pathname === '/AdminDashboard/employee'
                        ? 'bg-muted text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}>
                    <Users className='w-5 h-5' />
                    Employees
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className='flex-1 w-full'></div>
            <Button variant='secondary' size='icon' className='w-8 h-8 ml-auto'>
              <Bell className='w-4 h-4' />
              <span className='sr-only'>Toggle notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='secondary'
                  size='icon'
                  className='rounded-full'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/momo-shogun.png'
                      alt='krishna'
                    />
                    <AvatarFallback>KS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to='/settings'>Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className='flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6'>
            <Outlet />
            {/* <SiteFooter></SiteFooter> */}
          </main>
        </div>
      </div>
    </>
  )
}
