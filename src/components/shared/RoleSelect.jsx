import { forwardRef } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import PropTypes from 'prop-types'

const RoleSelect = forwardRef(({ className, value, onChange, name }, ref) => {
  const handleValueChange = newValue => {
    onChange({ target: { name, value: newValue } })
  }

  return (
    <Select name={name} value={value} onValueChange={handleValueChange}>
      <SelectTrigger className={className}>
        <SelectValue>
          {value ? (
            <span>{value}</span>
          ) : (
            <span className='text-gray-400'>Select a Role</span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='admin'>Admin</SelectItem>
          <SelectItem value='hr'>HR</SelectItem>
          <SelectItem value='normie'>Normie</SelectItem>
          <SelectItem value='super_hr'>Super HR</SelectItem>
          <SelectItem value='employee'>Employee</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
})

RoleSelect.displayName = 'RoleSelect'

RoleSelect.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default RoleSelect
