import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import DatePicker from '@/components/shared/DatePicker'
import RoleSelect from '@/components/shared/RoleSelect'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import DesignationComboBox from './component/DesignationComboBox'
import { ConfirmationDialog } from '@/components/shared/ConfirmationDialog'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
export default function AddEmployee() {
  const navigate = useNavigate()
  const formRef = useRef(null)

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({})

  const onSubmit = data => {
    console.log(data)
    navigate('/dashboard/employee')
  }

  // Function to handle form submission after confirmation
  const handleConfirmSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
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
            <BreadcrumbLink href='/dashboard/employee'>Employee</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Add Employee</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='max-w-full px-4 bg-white'>
        <h2 className='mb-4 text-2xl font-bold'>Employee Form</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className='grid gap-6 sm:grid-cols-1 md:grid-cols-2'>
          <div className='grid gap-4 md:grid-cols-2 sm:grid-cols-1'>
            <div>
              <Label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'>
                First Name
              </Label>
              <Input
                id='firstName'
                {...register('firstName', {
                  required: 'First Name is required',
                })}
                placeholder='Enter first name'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
              {errors.firstName && (
                <p className='text-sm text-red-500'>
                  {errors.firstName.message}
                </p>
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
                <p className='text-sm text-red-500'>
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Label
              htmlFor='dateOfJoining'
              className='block text-sm font-medium text-gray-700'>
              Date of Joining
            </Label>
            <Controller
              name='date'
              control={control}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={field.onChange}
                  className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              )}
            />
            {errors.date && (
              <p className='text-sm text-red-500'>{errors.date.message}</p>
            )}
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
              render={({ field }) => (
                <RoleSelect
                  value={field.value}
                  onChange={field.onChange}
                  className='w-full col-span-3 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              )}
            />
            {errors.role && (
              <p className='text-sm text-red-500'>{errors.role.message}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor='designation'
              className='block text-sm font-medium text-gray-700'>
              Designation
            </Label>
            <DesignationComboBox
              control={control}
              name='designation'
              rules={{ required: 'Designation is required' }}
            />
          </div>
          <div>
            <Label
              htmlFor='address'
              className='block text-sm font-medium text-gray-700'>
              Address
            </Label>
            <Input
              id='address'
              {...register('address', { required: 'Address is required' })}
              placeholder='Enter address'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.address && (
              <p className='text-sm text-red-500'>{errors.address.message}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700'>
              Phone Number
            </Label>
            <Input
              id='phone'
              {...register('phone', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be exactly 10 digits',
                },
              })}
              placeholder='Enter phone number'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.phone && (
              <p className='text-sm text-red-500'>{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label
              htmlFor='dob'
              className='block text-sm font-medium text-gray-700'>
              Date of Birth
            </Label>
            <Controller
              name='dob'
              control={control}
              rules={{ required: 'DOB is required' }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={field.onChange}
                  className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              )}
            />
            {errors.dob && (
              <p className='text-sm text-red-500'>{errors.dob.message}</p>
            )}
          </div>
          <div className='col-span-2'>
            <Label
              htmlFor='education'
              className='block text-sm font-medium text-gray-700'>
              Educational Background
            </Label>
            <Textarea
              id='education'
              {...register('education', {
                required: 'Educational Background is required',
              })}
              placeholder='Enter educational background'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.education && (
              <p className='text-sm text-red-500'>{errors.education.message}</p>
            )}
          </div>
          <div className='col-span-2'>
            <Label
              htmlFor='skills'
              className='block text-sm font-medium text-gray-700'>
              Skills
            </Label>
            <Textarea
              id='skills'
              {...register('skills', { required: 'Skills are required' })}
              placeholder='Enter skills'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.skills && (
              <p className='text-sm text-red-500'>{errors.skills.message}</p>
            )}
          </div>
          <div className='flex justify-between col-span-2 space-x-2'>
            <Button
              variant='destructive'
              type='button'
              className='px-4 py-2 font-medium text-left text-white rounded-md danger'
              onClick={() => reset()}>
              Cancel
            </Button>
            <ConfirmationDialog
              description='Are you sure you want to submit this form?'
              title='Confirm Submission'
              name='Submit'
              onConfirm={handleConfirmSubmit}
            />
          </div>
        </form>
      </div>
    </>
  )
}
