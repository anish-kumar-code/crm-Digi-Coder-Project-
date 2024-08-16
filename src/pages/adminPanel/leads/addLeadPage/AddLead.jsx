import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
export default function AddLead() {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      lastContacted: '',
      assignedTo: '',
      city: '',
      status: '',
    },
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard/leads'>Leads</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Add Employee</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='max-w-full px-4 bg-white rounded-lg'>
        <h2 className='mb-4 text-2xl font-bold'>Leads Form</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-2 gap-6'>
          <div>
            <Label
              htmlFor='firstName'
              className='block text-sm font-medium text-gray-700'>
              First Name
            </Label>
            <Input
              id='firstName'
              {...register('firstName', { required: 'First Name is required' })}
              placeholder='Enter first name'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.firstName && (
              <p className='text-sm text-red-500'>{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor='lastName'
              className='block text-sm font-medium text-gray-700'>
              Last Name
            </Label>
            <Input
              id='lastName'
              {...register('lastName', { required: 'Last Name is required' })}
              placeholder='Enter last name'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.lastName && (
              <p className='text-sm text-red-500'>{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor='phoneNumber'
              className='block text-sm font-medium text-gray-700'>
              Phone Number
            </Label>
            <Input
              id='phoneNumber'
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be exactly 10 digits',
                },
              })}
              placeholder='Enter phone number'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.phoneNumber && (
              <p className='text-sm text-red-500'>
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </Label>
            <Input
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder='Enter email'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor='lastContacted'
              className='block text-sm font-medium text-gray-700'>
              Last Contacted
            </Label>
            <Input
              id='lastContacted'
              {...register('lastContacted', {
                required: 'Last Contacted date is required',
              })}
              placeholder='Enter last contacted date'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.lastContacted && (
              <p className='text-sm text-red-500'>
                {errors.lastContacted.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor='assignedTo'
              className='block text-sm font-medium text-gray-700'>
              Assigned To
            </Label>
            <Input
              id='assignedTo'
              {...register('assignedTo', {
                required: 'Assigned To is required',
              })}
              placeholder='Enter assigned to'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.assignedTo && (
              <p className='text-sm text-red-500'>
                {errors.assignedTo.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor='city'
              className='block text-sm font-medium text-gray-700'>
              City
            </Label>
            <Input
              id='city'
              {...register('city', { required: 'City is required' })}
              placeholder='Enter city'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.city && (
              <p className='text-sm text-red-500'>{errors.city.message}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor='status'
              className='block text-sm font-medium text-gray-700'>
              Status
            </Label>
            <Input
              id='status'
              {...register('status', { required: 'Status is required' })}
              placeholder='Enter status'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.status && (
              <p className='text-sm text-red-500'>{errors.status.message}</p>
            )}
          </div>
          <div className='flex justify-between col-span-2'>
            <Link to='/dashboard/leads'>
              <Button
                type='button'
                className='px-4 py-2 font-medium text-left text-white bg-red-400 rounded-md hover:bg-red-600 hover:text-white'
                onClick={() => reset()}>
                Cancel
              </Button>
            </Link>

            <Button
              className='px-4 py-2 font-medium text-white bg-indigo-500 rounded-md ps-auto hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
