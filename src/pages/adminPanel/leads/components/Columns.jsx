import { Badge } from '@/components/ui/badge'
import { Trash } from 'lucide-react'
import EditDialog from './EditDialog'
import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    label: 'Lead Name',
    renderCell: item => (
      <Link className='underline' to={`/dashboard/leads/${item.id}`}>
        {item.firstName} {item.lastName}
      </Link>
    ),
    select: true,
  },
  {
    label: 'Contact Information',
    renderCell: item => (
      <>
        <div>{item.phoneNumber}</div>
        <div>{item.email}</div>
      </>
    ),
  },
  {
    label: 'Status',
    renderCell: item => item.status,
  },
  {
    label: 'Source',
    renderCell: item => item.source,
  },
  {
    label: 'Assigned',
    renderCell: item => <Badge variant='outline'>{item.assignedTo}</Badge>,
  },
  {
    label: 'Date Created',
    renderCell: item => item.dateCreated,
  },
  {
    label: 'Last Contacted',
    renderCell: item => item.lastContacted,
  },
  {
    label: 'Action',
    renderCell: item => (
      <div className='flex gap-4'>
        <EditDialog item={item}></EditDialog>
        <Trash size={17} strokeWidth={1.25} className='hover:text-primary' />
      </div>
    ),
  },
]

// eslint-disable-next-line react-refresh/only-export-components
export default COLUMNS
