import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
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
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { UserCheck } from 'lucide-react'
import { employees } from '../data/employeesList'

export function EmployeeAssignComboBox({ onAssign, select }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [showAssignButton, setShowAssignButton] = React.useState(false)
  const { toast } = useToast()

  const handleSelect = currentValue => {
    setValue(currentValue === value ? '' : currentValue)
    setShowAssignButton(currentValue !== value)
    setOpen(false)
  }

  const handleAssign = () => {
    if (!value) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! No Employee Selected.',
        description: 'Please select an employee to assign leads to.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      })
      return
    }

    const selectedLeads = select.state.ids

    if (!selectedLeads || selectedLeads.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! No Leads Selected.',
        description: 'Please select at least one lead to assign.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      })
      return
    }

    onAssign(value, selectedLeads)

    // Reset selections and selected employee after assignment
    select.fns.onToggleAll(false)
    setValue('')
    setShowAssignButton(false)
  }

  return (
    <div className='flex items-center space-x-2'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            size='sm'
            aria-expanded={open}
            className='justify-between'>
            {value
              ? employees.find(employee => employee.value === value)?.label
              : 'Assign this to'}
            <CaretSortIcon className='w-4 h-4 ml-2 opacity-50 shrink-0' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search employee...' className='h-9' />
            <CommandList>
              <CommandEmpty>No employee found.</CommandEmpty>
              <CommandGroup>
                {employees.map(employee => (
                  <CommandItem
                    key={employee.value}
                    value={employee.value}
                    onSelect={() => handleSelect(employee.value)}>
                    {employee.label}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        value === employee.value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {showAssignButton && (
        <Button
          variant='outline'
          size='sm'
          onClick={handleAssign}
          className='gap-1'>
          <UserCheck className='h-3.5 w-3.5' /> Assign
        </Button>
      )}
    </div>
  )
}
