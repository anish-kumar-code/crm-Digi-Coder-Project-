'use client'

import { Bar, BarChart, Rectangle, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components//ui/card'
import { ChartContainer } from '@/components//ui/chart'

export default function LeadsTotal({ head, desc, value }) {
  return (
    <Card className='max-w-sm'>
      <CardHeader className='p-4 pb-0'>
        <CardTitle>{head}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-row items-baseline gap-4 p-4 pt-2'>
        <div className='flex items-baseline gap-2 text-3xl font-bold leading-none text-blue-500 tabular-nums'>
          {value}
          <span className='text-sm font-normal text-muted-foreground'>
            Leads/month
          </span>
        </div>
        <ChartContainer
          config={{
            leads: {
              label: 'Leads',
              color: 'hsl(var(--chart-1))',
            },
          }}
          className='ml-auto'>
          <BarChart
            accessibilityLayer
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            data={[
              {
                date: '2024-01-01',
                calories: 354,
              },
              {
                date: '2024-01-02',
                calories: 514,
              },
              {
                date: '2024-01-03',
                calories: 345,
              },
              {
                date: '2024-01-04',
                calories: 734,
              },
              {
                date: '2024-01-05',
                calories: 645,
              },
              {
                date: '2024-01-06',
                calories: 456,
              },
              {
                date: '2024-01-07',
                calories: 345,
              },
            ]}>
            <Bar
              dataKey='calories'
              fill='var(--color-calories)'
              radius={2}
              fillOpacity={0.2}
              activeIndex={6}
              activeBar={<Rectangle fillOpacity={0.8} />}
            />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              hide
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
