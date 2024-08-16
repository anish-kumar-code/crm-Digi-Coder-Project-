import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { BadgePlusIcon, Upload } from 'lucide-react'

export default function AddReference({ className }) {
  const [files, setFiles] = useState([])
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date(),
    },
  })

  const onSubmit = data => {
    console.log(data)
    // Log file names when the form is submitted
    Array.from(files).forEach(file => {
      console.log(file.name)
    })
    // Handle form submission
    reset() // Reset form fields after submission
  }

  const handleFileChange = event => {
    const selectedFiles = event.target.files
    setFiles(selectedFiles)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className={cn(className)}>
          <BadgePlusIcon className='w-4 h-4 me-2' /> Add Reference
        </Button>
      </DialogTrigger>
      <DialogContent
        className='sm:max-w-[625px]'
        aria-describedby='Description'>
        <DialogHeader>
          <DialogTitle>Add Reference</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id='title'
            type='text'
            placeholder='Title'
            className='my-2'
            {...register('title')}
          />
          <div className='w-full p-4 mx-auto border border-gray-300 border-dashed rounded-lg'>
            <div className='flex flex-col items-center justify-center h-full'>
              <Upload className='w-8 h-8 text-gray-500' />
              <Input
                type='file'
                multiple
                id='file-upload'
                className='hidden'
                onChange={handleFileChange}
              />
              <label
                htmlFor='file-upload'
                className='mt-2 text-sm text-blue-500 cursor-pointer'>
                Upload files
              </label>
              <p className='mt-1 text-xs text-gray-500'>or drop files</p>
              {files.length > 0 && (
                <ul className='mt-4 text-sm text-gray-700'>
                  {Array.from(files).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <DialogFooter className='col-span-2'>
            <Button type='submit'>Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
