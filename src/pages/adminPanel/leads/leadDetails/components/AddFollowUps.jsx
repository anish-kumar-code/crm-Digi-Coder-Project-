import { useForm, Controller } from 'react-hook-form'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog' // Adjust according to your dialog library
import { Button } from '@/components/ui/button' // Adjust according to your button component path
import { Input } from '@/components/ui/input' // Adjust according to your input component path
import { Label } from '@/components/ui/label' // Adjust according to your label component path
import { cn } from '@/lib/utils'
import DatePicker from '@/components/shared/DatePicker'
import { BadgePlusIcon } from 'lucide-react'
import MarkAsDoneToggle from './MarkAsDoneToggler'
import ReminderToggler from './ReminderToggler'
export default function AddFollowUps({ className }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValue: new Date() })

  const onSubmit = data => {
    console.log(data)
    // Handle form submission
    reset() // Reset form fields after submission
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className={cn(className)}>
          <BadgePlusIcon className='w-4 h-4 me-2' /> Add Follow-Up
        </Button>
      </DialogTrigger>
      <DialogContent
        className='sm:max-w-[625px]'
        aria-describedby='Description'>
        <DialogHeader>
          <DialogTitle>Add Follow-Up</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-4 '>
          <div>
            <Label
              htmlFor='followUpsTitle'
              className='block text-sm font-medium text-gray-700'>
              Follow Up
            </Label>
            <Input
              id='followUpsTitle'
              placeholder='Enter Follow-Up '
              {...register('taskName', { required: 'Follow up is required' })}
              className='block w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.taskName && (
              <p className='text-sm text-red-500'>{errors.taskName.message}</p>
            )}
          </div>
          <div className='p-0 '>
            <Label
              htmlFor='date'
              className='block text-sm font-medium text-gray-700'>
              Date of Creation
            </Label>
            <Controller
              name='date'
              control={control}
              defaultValue={new Date()}
              render={({ field }) => (
                <DatePicker
                  selected={new Date()}
                  rules={{ required: 'Date is required' }}
                  className={'w-full mt-2'}
                  disabled
                />
              )}
            />
          </div>
          <div className='col-span-2 m-0'>
            <Label
              htmlFor='details'
              className='block text-sm font-medium text-gray-700'>
              Details
            </Label>
            <Input
              id='details'
              placeholder='Enter Details'
              {...register('details')}
              className='block w-full py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className=''>
            <ReminderToggler control={control} />
          </div>
          <div className=''>
            <MarkAsDoneToggle control={control} name='markAsDone' />
          </div>
          <DialogFooter className='col-span-2'>
            <Button type='submit'>Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
