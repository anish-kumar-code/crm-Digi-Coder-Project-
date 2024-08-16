import { useForm } from 'react-hook-form'
import FormField from '@/components/shared/FormField'
import ErrorMessage from '@/components/shared/ErrorMessage'

function DetailsTab({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid w-full grid-cols-2 gap-5'>
        <FormField
          id='firstName'
          label='First Name'
          register={register}
          validation={{ required: 'First Name is required' }}
          placeholder='Enter first name'
          errors={errors}
        />
        <FormField
          id='lastName'
          label='Last Name'
          register={register}
          validation={{ required: 'Last Name is required' }}
          placeholder='Enter last name'
          errors={errors}
        />
        <FormField
          id='lastContacted'
          label='Last Contacted'
          register={register}
          validation={{ required: 'Last Contacted date is required' }}
          placeholder='Enter last contacted date'
          errors={errors}
        />
        <FormField
          id='assignedTo'
          label='Assigned To'
          register={register}
          validation={{ required: 'Assigned To is required' }}
          placeholder='Enter assigned to'
          errors={errors}
        />
        <FormField
          id='city'
          label='City'
          register={register}
          validation={{ required: 'City is required' }}
          placeholder='Enter city'
          errors={errors}
        />
        <FormField
          id='status'
          label='Status'
          register={register}
          validation={{ required: 'Status is required' }}
          placeholder='Enter status'
          errors={errors}
        />
        <FormField
          id='phoneNumber'
          label='Phone Number'
          register={register}
          validation={{
            required: 'Phone Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be exactly 10 digits',
            },
          }}
          placeholder='Enter phone number'
          errors={errors}
        />
        <FormField
          id='email'
          label='Email'
          register={register}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          placeholder='Enter email'
          errors={errors}
        />
      </div>
      <div className='flex justify-end mt-4'>
        <button
          type='submit'
          className='fixed px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
          Update
        </button>
      </div>
    </form>
  )
}

export default DetailsTab
