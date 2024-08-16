import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const FormField = ({
  id,
  label,
  register,
  validation,
  placeholder,
  errors,
}) => {
  return (
    <div className=''>
      <Label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </Label>
      <Input
        id={id}
        {...register(id, validation)}
        placeholder={placeholder}
        className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      />
      {errors[id] && (
        <p className='text-sm text-red-500'>{errors[id].message}</p>
      )}
    </div>
  )
}

export default FormField
