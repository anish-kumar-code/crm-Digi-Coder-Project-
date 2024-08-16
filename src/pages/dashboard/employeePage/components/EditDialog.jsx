import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { CircleX, Pencil, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import PropTypes from 'prop-types'
import DesignationComboBox from '../addEmployeePage/component/DesignationComboBox'
import RoleSelect from '@/components/shared/RoleSelect'
import DatePicker from '@/components/shared/DatePicker'

export default function EditDialog({ item }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: item,
  })

  const onSubmit = data => {
    console.log('Updated data:', data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm' variant='ghost'>
          <Pencil size={17} strokeWidth={1.25} className='hover:text-primary' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[750px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Separator />

        <div className='max-w-full bg-white rounded-lg'>
          <form
            className='grid grid-cols-2 gap-4'
            onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'>
                First Name
              </Label>
              <Controller
                name='firstName'
                control={control}
                rules={{ required: 'First name is required' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder='Enter first name'
                    className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                )}
              />
              {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
            <div>
              <Label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700'>
                Last Name
              </Label>
              <Controller
                name='lastName'
                control={control}
                rules={{ required: 'Last name is required' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder='Enter last name'
                    className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                )}
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
            <div>
              <Label
                htmlFor='designation'
                className='block text-sm font-medium text-gray-700'>
                Designation
              </Label>
              <Controller
                name='designation'
                control={control}
                rules={{ required: 'Designation is required' }}
                render={({ field }) => (
                  <DesignationComboBox {...field} control={control} />
                )}
              />
            </div>
            <div>
              <Label
                htmlFor='role'
                className='block text-sm font-medium text-gray-700'>
                Role
              </Label>
              <Controller
                name='role'
                control={control}
                rules={{ required: 'Role is required' }}
                render={({ field }) => (
                  <RoleSelect
                    {...field}
                    className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                )}
              />
              {errors.role && <span>{errors.role.message}</span>}
            </div>
            <div>
              <Label
                htmlFor='date'
                className='block text-sm font-medium text-gray-700'>
                Date
              </Label>
              <Controller
                name='date'
                control={control}
                rules={{ required: 'Date is required' }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    rules={{ required: 'Date is required' }}
                  />
                )}
              />
              {errors.date && <span>{errors.date.message}</span>}
            </div>
            <div className='flex justify-between col-span-2'>
              <Button
                type='button'
                className='gap-1 mr-2'
                variant='destructive'
                size='sm'>
                <CircleX className='h-3.5 w-3.5' />
                Cancel
              </Button>
              <Button
                type='submit'
                size='sm'
                className='gap-1 text-white bg-indigo-500 hover:bg-indigo-600'>
                <Save className='h-3.5 w-3.5' />
                Save
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

EditDialog.propTypes = {
  item: PropTypes.object.isRequired,
}
