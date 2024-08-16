import { CircleX, Pencil, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import PropTypes from 'prop-types'

export default function EditDialog({ item }) {
  const handleEditClick = () => {
    console.log(item)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm' variant='ghost' onClick={handleEditClick}>
          <Pencil size={17} strokeWidth={1.25} className='hover:text-primary' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[750px]'>
        <DialogHeader className=''>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`&apos;`re
            done.
          </DialogDescription>
        </DialogHeader>
        <Separator className='' />
        <div className='max-w-full bg-white rounded-lg '>
          <form className='grid grid-cols-2 gap-4'>
            <div>
              <Label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700'>
                First Name
              </Label>
              <Input
                placeholder='Enter first name'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.firstName}
              />
            </div>
            <div>
              <Label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700'>
                Last Name
              </Label>
              <Input
                placeholder='Enter last name'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.lastName}
              />
            </div>
            <div>
              <Label
                htmlFor='phoneNumber'
                className='block text-sm font-medium text-gray-700'>
                Phone Number
              </Label>
              <Input
                placeholder='Enter phone number'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.phoneNumber}
              />
            </div>
            <div>
              <Label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'>
                Email
              </Label>
              <Input
                placeholder='Enter email'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.email}
              />
            </div>
            <div>
              <Label
                htmlFor='lastContacted'
                className='block text-sm font-medium text-gray-700'>
                Last Contacted
              </Label>
              <Input
                placeholder='Enter last contacted date'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.lastContacted}
              />
            </div>
            <div>
              <Label
                htmlFor='assignedTo'
                className='block text-sm font-medium text-gray-700'>
                Assigned To
              </Label>
              <Input
                placeholder='Enter assigned to'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.assignedTo}
              />
            </div>
            <div>
              <Label
                htmlFor='followUp'
                className='block text-sm font-medium text-gray-700'>
                Follow Up
              </Label>
              <Input
                placeholder='Follow - Ups Task Name'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.followUps[0].taskName}
              />
            </div>
            <div>
              <Label
                htmlFor='status'
                className='block text-sm font-medium text-gray-700'>
                Status
              </Label>
              {/* <Input
                placeholder='Enter status'
                className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                value={item.status}
              /> */}
              <Select>
                <SelectTrigger className='w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                  <SelectValue placeholder={item.status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='active'>Active</SelectItem>
                    <SelectItem value='inactive'>Inactive</SelectItem>
                    <SelectItem value='pending'>Pending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex justify-between col-span-2'>
              <Button
                type='button'
                className='gap-1 mr-2'
                variant='destructive'
                size='sm'>
                <CircleX className='h-3.5 w-3.5' />
                Cancel
              </Button>
              <Button
                type='submit'
                size='sm'
                className='gap-1 text-white bg-indigo-500 hover:bg-indigo-600'>
                <Save className='h-3.5 w-3.5' />
                Save
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

EditDialog.propTypes = {
  item: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    lastContacted: PropTypes.string.isRequired,
    assignedTo: PropTypes.string.isRequired,
    followUps: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
}
