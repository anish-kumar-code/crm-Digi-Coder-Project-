// columnsData.js
import { Badge } from '@/components/ui/badge'
import { Trash } from 'lucide-react'
import EditDialog from './EditDialog'
import { Link } from 'react-router-dom'
const COLUMNS = [
  {
    label: 'First Name',
    renderCell: item => (
      <Link className='underline' to={`/dashboard/leads/${item.id}`}>
        {item.firstName}
      </Link>
    ),
  },
  {
    label: 'Last Name',
    renderCell: item => item.lastName,
  },
  {
    label: 'Phone Number',
    renderCell: item => item.phoneNumber,
  },
  {
    label: 'Email Address',
    renderCell: item => item.email,
  },
  {
    label: 'Last Contacted',
    renderCell: item => item.lastContacted,
  },

  {
    label: 'Assigned To',
    renderCell: item => (
      <Badge variant='secondary' className='bg-blue-300'>
        {item.assignedTo}
      </Badge>
    ),
  },
  /* {
    label: 'City',
    renderCell: item => item.city,
  }, */
  {
    label: 'Follow Up',
    renderCell: item => item.followUps[0]?.taskName || 'No Follow Ups',
  },
  {
    label: 'Status',
    renderCell: item => item.status,
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
