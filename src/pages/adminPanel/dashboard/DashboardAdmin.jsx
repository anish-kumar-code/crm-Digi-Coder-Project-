import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from './component/date-range-picker'
import { Overview } from './component/overview'
import { RecentSales } from './component/recent-sales'
import { IndianRupee, Users, LineChart, BadgeIndianRupee } from 'lucide-react'
import { TeamMembers } from './component/TeamMember'
import PlansBlock from './component/PlanRemainBlock'
import LeadsTotal from './component/LeadsTotal'
import PlanDetails from './component/PlanDetails'

function DashboardAdmin() {
  const plan = 'Starter'
  const payment = '$29'
  const subscribers = 18
  const subscriberLimit = 20
  const emailsSent = 412
  const workflowUsed = 15
  return (
    <>
      <div className='flex-col md:flex'>
        <div className='flex-1 space-y-4 md:pt-6 md:p-8'>
          <div className='items-center justify-between space-y-2 lg:flex'>
            <h2 className='text-3xl font-bold tracking-tight'>
              Welcome Admin Logan
            </h2>
            <div className='items-center hidden space-x-2 md:flex'>
              {/* <CalendarDateRangePicker /> */}
            </div>
          </div>
          <Tabs defaultValue='overview' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics' disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value='reports' disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value='notifications' disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value='overview' className='space-y-4'>
              <div className='grid grid-cols-3 gap-4 '>
                <div className='col-span-2 space-y-3'>
                  <div className='flex gap-2'>
                    <div className='flex-1'>
                      <LeadsTotal
                        head={'Succesfully Converted Leads'}
                        desc={'Leads generated in the last 30 days'}
                        value={1254}
                      />
                    </div>
                    <div className='flex-1'>
                      <LeadsTotal
                        head={'Leads Losts'}
                        desc={'Leads Lost in the last 30 days'}
                        value={123}
                      />
                    </div>
                  </div>
                  <div className=''>
                    <PlanDetails
                      plan={plan}
                      payment={payment}
                      subscribers={subscribers}
                      subscriberLimit={subscriberLimit}
                      emailsSent={emailsSent}
                      workflowUsed={workflowUsed}
                    />
                  </div>
                </div>

                <div className=''>
                  <TeamMembers />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin
