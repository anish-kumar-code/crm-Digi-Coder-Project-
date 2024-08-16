import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'
import { Card, CardContent } from '@/components/ui/card'

export default function PlanProgress({
  daysLeft = 5,
  totalDays = 30,
  className,
}) {
  const percentageRemaining = (daysLeft / totalDays) * 100

  return (
    <Card className={`max-w-full p-4 shadow-lg ${className}`}>
      <CardContent className='grid items-center justify-center grid-cols-2 p-0 align-middle'>
        <div className='text-center'>
          <h4 className='text-sm font-semibold text-muted-foreground'>
            Plan Expires In
          </h4>
          <div className='text-sm font-bold text-muted-foreground'>
            {daysLeft} <span className='text-md'>days</span>
          </div>
        </div>
        <RadialBarChart
          width={50}
          height={50}
          innerRadius='80%'
          outerRadius='100%'
          barSize={20}
          data={[
            {
              name: 'Remaining',
              value: percentageRemaining,
              fill: daysLeft > 15 ? '#4caf50' : '#f44336', // Green if >20%, red if ≤20%
            },
          ]}
          startAngle={90}
          endAngle={450}>
          <PolarAngleAxis
            type='number'
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar background dataKey='value' cornerRadius={10} clockWise />
        </RadialBarChart>
      </CardContent>
    </Card>
  )
}
