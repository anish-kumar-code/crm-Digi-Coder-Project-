// columnsData.js
import { Badge } from '@/components/ui/badge'
import { Trash } from 'lucide-react'
import EditDialog from './EditDialog'

const COLUMNS = [
  {
    label: 'First Name',
    renderCell: item => item.firstName,
  },
  {
    label: 'Last Name',
    renderCell: item => item.lastName,
  },
  {
    label: 'Designation',
    renderCell: item => item.designation,
  },
  {
    label: 'Role',
    renderCell: item => <Badge variant='secondary'>{item.role}</Badge>,
  },
  {
    label: 'Date',
    renderCell: item =>
      item.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },
  {
    label: 'Action',
    renderCell: item => (
      <td className='flex gap-4'>
        <EditDialog item={item}></EditDialog>
        <Trash size={17} strokeWidth={1.25} className='hover:text-primary' />
      </td>
    ),
  },
]

// eslint-disable-next-line react-refresh/only-export-components
export default COLUMNS
