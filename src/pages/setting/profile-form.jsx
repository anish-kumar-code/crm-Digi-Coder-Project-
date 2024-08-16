import { useForm, Controller } from 'react-hook-form'
import { toast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import DatePicker from '@/components/shared/DatePicker'
import RoleSelect from '@/components/shared/RoleSelect'
import DesignationComboBox from '../dashboard/employeePage/addEmployeePage/component/DesignationComboBox'

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
      <div>
        <div className='flex gap-8'>
          <div className=''>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Profile Preview'
              className='object-cover w-32 h-32 my-auto rounded-full '
            />
          </div>

          <div className='my-auto'>
            <Input
              type='file'
              accept='image/*'
              className='block px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm w-15 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Upload Profile Picture'
            />
            <p className='mt-4 text-sm text-muted-foreground'>
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
      </div>

      <div>
        <Label className='block text-sm font-medium text-gray-700'>
          First Name
        </Label>
        <Input
          className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='First Name'
          {...register('firstName', {
            required: 'First Name is required',
            minLength: {
              value: 2,
              message: 'First Name must be at least 2 characters',
            },
            maxLength: {
              value: 30,
              message: 'First Name must be less than 30 characters',
            },
          })}
        />
        {errors.firstName && (
          <p className='text-sm text-red-500'>{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <Label className='block text-sm font-medium text-gray-700'>
          Last Name
        </Label>
        <Input
          className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Last Name'
          {...register('lastName', {
            required: 'Last Name is required',
            minLength: {
              value: 2,
              message: 'Last Name must be at least 2 characters',
            },
            maxLength: {
              value: 30,
              message: 'Last Name must be less than 30 characters',
            },
          })}
        />
        {errors.lastName && (
          <p className='text-sm text-red-500'>{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <Label className='block text-sm font-medium text-gray-700'>
          Date of Joining
        </Label>
        <Controller
          name='dateofjoining'
          control={control}
          rules={{ required: 'Date of joining is required' }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          )}
        />
        {errors.dateofjoining && (
          <p className='text-sm text-red-500'>{errors.dateofjoining.message}</p>
        )}
      </div>

      <div>
        <Label className='block text-sm font-medium text-gray-700'>Role</Label>
        <Controller
          name='role'
          control={control}
          rules={{ required: 'Role is required' }}
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
        <Controller
          name='designation'
          control={control}
          rules={{ required: 'Designation is required' }}
          render={({ field }) => (
            <DesignationComboBox
              name='designation'
              value={field.value}
              onChange={field.onChange}
              control={control}
              className='w-full col-span-3 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          )}
        />
        {errors.designation && (
          <p className='text-sm text-red-500'>{errors.designation.message}</p>
        )}
      </div>

      <div>
        <Label>Address</Label>
        <Textarea
          placeholder='Address'
          {...register('address', {
            required: 'Address is required',
            maxLength: {
              value: 160,
              message: 'Address must be less than 160 characters',
            },
            minLength: {
              value: 4,
              message: 'Address must be at least 4 characters',
            },
          })}
        />
        {errors.address && (
          <p className='text-sm text-red-500'>{errors.address.message}</p>
        )}
      </div>

      <div>
        <Label>Phone Number</Label>
        <Input
          placeholder='Phone Number'
          {...register('phone', {
            required: 'Phone Number is required',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Phone Number must be only numbers',
            },
            minLength: {
              value: 10,
              message: 'Phone Number must be at least 10 characters',
            },
            maxLength: {
              value: 15,
              message: 'Phone Number must be less than 15 characters',
            },
          })}
        />
        {errors.phone && (
          <p className='text-sm text-red-500'>{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label>Date of Birth</Label>
        <Controller
          name='dob'
          control={control}
          rules={{ required: 'Date of birth is required' }}
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

      <div>
        <Label>Educational Background</Label>
        <Textarea
          placeholder='Educational Background'
          {...register('education', {
            required: 'Educational Background is required',
            maxLength: {
              value: 160,
              message:
                'Educational Background must be less than 160 characters',
            },
            minLength: {
              value: 4,
              message: 'Educational Background must be at least 4 characters',
            },
          })}
        />
        {errors.education && (
          <p className='text-sm text-red-500'>{errors.education.message}</p>
        )}
      </div>

      <div>
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

      <Button type='submit'>Update Profile</Button>
    </form>
  )
}
