import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { uniqueDesignations } from '../../data/data'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'

const DesignationComboBox = React.forwardRef(
  ({ control, name, rules = {} }, ref) => {
    const {
      field: { value, onChange },
    } = useController({
      name,
      control,
      rules,
    })
    const [open, setOpen] = React.useState(false)

    return (
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='justify-between w-full mt-1 text-sm font-normal text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>
              {value
                ? uniqueDesignations.find(
                    designation => designation.value === value,
                  )?.label
                : 'Select designation...'}
              <CaretSortIcon className='w-4 h-4 ml-2 opacity-50 shrink-0' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-full p-0'>
            <Command>
              <CommandInput
                placeholder='Search designation...'
                className='h-9'
              />
              <CommandList>
                <CommandEmpty>No designation found.</CommandEmpty>
                <CommandGroup>
                  {uniqueDesignations.map(designation => (
                    <CommandItem
                      key={designation.value}
                      value={designation.value}
                      onSelect={currentValue => {
                        onChange(currentValue === value ? '' : currentValue)
                        setOpen(false)
                      }}>
                      {designation.label}
                      <CheckIcon
                        className={`ml-auto h-4 w-4 ${
                          value === designation.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
)

DesignationComboBox.displayName = 'DesignationComboBox'

DesignationComboBox.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
}

export default DesignationComboBox
