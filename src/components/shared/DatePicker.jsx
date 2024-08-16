import React from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import PropTypes from 'prop-types'

const DatePicker = React.forwardRef(
  ({ selected, onChange, className }, ref) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant={'outline'}
            className={cn(
              'w-[240px] justify-start text-left font-normal',
              !selected && 'text-muted-foreground',
              className,
            )}>
            <CalendarIcon className='w-4 h-4 mr-2' />
            {selected ? format(selected, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className='w-auto p-0'
          align='start'
          onClick={e => e.stopPropagation()}>
          <Calendar
            mode='single'
            selected={selected}
            onSelect={onChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    )
  },
)

// Set the display name for better debugging
DatePicker.displayName = 'DatePicker'

DatePicker.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  className: PropTypes.string,
}

export default DatePicker
