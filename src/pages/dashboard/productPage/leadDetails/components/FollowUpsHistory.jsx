import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Pencil, LucideRocket } from 'lucide-react'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
export default function FollowUpsHistory({
  title,
  date,
  message,
  tags,
  className,
  onMarkComplete, // Add a callback function prop for marking as complete
}) {
  const { toast } = useToast()

  return (
    <>
      <div className={cn('flex flex-col w-full gap-1 ', className)}>
        <div className='flex flex-col items-start gap-2 p-3 text-sm text-left transition-all border rounded-lg hover:bg-accent bg:muted '>
          <div className='w-full'>
            <div className='flex items-center w-full gap-2'>
              <div className='text-base font-semibold'>{title}</div>
              <div className='ml-auto text-xs text-gray-500'>{date}</div>
            </div>
            <p className='text-[11px] text-gray-500'>8:30 pm 29/07/2024</p>
          </div>
          <CardContent className='p-0 '>
            <div className='text-sm text-gray-700'>{message}</div>
          </CardContent>
          <CardFooter className='flex items-center justify-end w-full gap-4 p-0'>
            <Pencil className='w-[1rem] h-[1rem] hover:text-blue-500 ' />
            <Button
              variant='outline'
              size='sm'
              className='p-4 text-white bg-blue-900 rounded-full hover:bg-blue-500 hover:text-white'
              onClick={() => {
                toast({
                  title: 'Completed',
                  description: ` Friday, February 10, 2023 at 5:57 PM`,
                })
              }}>
              Mark as Complete
            </Button>
          </CardFooter>
        </div>
      </div>
    </>
  )
}
