import { useState, useEffect } from 'react'
import DatePicker from '@/components/shared/DatePicker'
import { Controller } from 'react-hook-form'

const ReminderToggler = ({ control }) => {
  const [isToggled, setIsToggled] = useState(false)
  const [reminderDate, setReminderDate] = useState(null) // Start with null

  const handleToggleChange = () => {
    setIsToggled(prev => !prev)
  }

  useEffect(() => {
    if (!isToggled) {
      setReminderDate(null) // Clear the reminder date when toggled off
    }
  }, [isToggled])

  return (
    <div className='pt-4'>
      <label
        htmlFor='reminderToggle'
        className='flex items-center cursor-pointer'>
        <div className='font-medium text-gray-700 me-3'>Set a Reminder?</div>
        <div className='relative'>
          <input
            id='reminderToggle'
            type='checkbox'
            className='sr-only'
            onChange={handleToggleChange}
          />
          <div className='block w-10 h-6 transition-colors duration-300 ease-in-out bg-gray-600 rounded-full'>
            <div
              className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
                isToggled ? 'translate-x-full bg-blue-500' : ''
              }`}
            />
          </div>
        </div>
      </label>
      {isToggled && (
        <div className='mt-4'>
          <Controller
            name='reminderDate'
            control={control}
            value={reminderDate} // Ensure proper controlled value
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                selected={value}
                onChange={date => {
                  setReminderDate(date)
                  onChange(date) // Update the form value
                }}
                dateFormat='Pp'
                className='p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            )}
          />
        </div>
      )}
    </div>
  )
}

export default ReminderToggler
