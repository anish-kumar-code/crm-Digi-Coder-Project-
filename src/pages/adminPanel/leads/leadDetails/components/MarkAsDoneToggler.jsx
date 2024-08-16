import { Controller } from 'react-hook-form'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

const MarkAsDoneToggle = ({ control, name }) => {
  return (
    <div className='pt-4'>
      <label htmlFor={name} className='flex items-center cursor-pointer'>
        <div className='font-medium text-gray-700 me-3'>Mark this as Done?</div>
        <div className='relative'>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  id={name}
                  type='checkbox'
                  className='sr-only'
                  aria-describedby={`${name}Description`}
                  onChange={e => field.onChange(e.target.checked)}
                  checked={field.value}
                />
                <div className='block w-10 h-6 transition-colors duration-300 ease-in-out bg-gray-600 rounded-full'>
                  <div
                    className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
                      field.value
                        ? 'transform translate-x-full bg-green-400'
                        : 'bg-white'
                    }`}
                  />
                </div>
              </>
            )}
          />
        </div>
      </label>
      <p id={`${name}Description`} className='sr-only'>
        Toggle to mark the item as done
      </p>
    </div>
  )
}

export default MarkAsDoneToggle
