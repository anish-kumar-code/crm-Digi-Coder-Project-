import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const PlanDetails = ({
  plan,
  payment,
  subscribers,
  subscriberLimit,
  emailsSent,
  workflowUsed,
}) => {
  return (
    <Card className='max-w-full p-4'>
      <CardHeader className='grid items-center justify-between grid-cols-3'>
        <div>
          <div className='text-sm text-muted-foreground'>Plan</div>
          <CardTitle className='text-lg'>{plan}</CardTitle>
        </div>
        <div className='text-left'>
          <div className='text-xl font-semibold'>{payment}</div>
          <div className='text-sm text-muted-foreground'>per month</div>
        </div>
        <div className='flex gap-2'>
          <div className='text-sm text-muted-foreground'></div>
          <Button variant='link' size='sm' className='text-xs'>
            Cancel subscription
          </Button>
          <Button variant='link' size='sm' className='text-xs'>
            Upgrade
          </Button>
        </div>
      </CardHeader>

      <CardContent className='mt-4'>
        <div className='grid grid-cols-3 gap-6'>
          {/* Team Members */}
          <div>
            <div className='flex items-center justify-between'>
              <div className='text-sm text-muted-foreground'>Team Members</div>
            </div>
            <div className='flex items-baseline gap-2'>
              <span className='text-xl font-bold'>{subscribers}</span>
              <span className='text-sm text-muted-foreground'>
                /{subscriberLimit}
              </span>
            </div>
            <Progress
              value={(subscribers / subscriberLimit) * 100}
              className='mt-2'
            />
          </div>

          {/* Leads Added */}
          <div>
            <div className='text-sm text-muted-foreground'>
              Monthly Leads Added
            </div>
            <div className='flex items-baseline gap-2'>
              <span className='text-xl font-bold'>{emailsSent}</span>
              <span className='text-sm text-muted-foreground'>500</span>
            </div>
            <Progress value={(emailsSent / 1000) * 100} className='mt-2' />
          </div>

          {/* Expires In */}
          <div>
            <div className='flex items-center justify-between'>
              <div className='text-sm text-muted-foreground'>Expires In</div>
            </div>
            <div className='flex items-baseline gap-2'>
              <span className='text-xl font-bold'>{workflowUsed}</span>
              <span className='text-sm text-muted-foreground'> days</span>
            </div>
            <Progress value={workflowUsed} className={'mt-2'} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PlanDetails
