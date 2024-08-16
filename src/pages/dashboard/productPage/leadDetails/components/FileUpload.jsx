import { useState } from 'react'
import { Files, Upload } from 'lucide-react'

function FileUpload() {
  const [files, setFiles] = useState([])

  const handleFileChange = event => {
    setFiles(event.target.files)
  }

  return (
    <>
      <div className='flex items-center gap-2 my-4'>
        <Files className='w-5 h-5 p-4 text-white bg-gray-700 rounded-full ' />
        <p>Files</p>
      </div>
      <div className='w-full p-4 mx-auto border border-gray-300 border-dashed rounded-lg'>
        <div className='flex flex-col items-center justify-center h-full'>
          <Upload className='w-8 h-8 text-gray-500' />
          <input
            type='file'
            multiple
            onChange={handleFileChange}
            className='hidden'
            id='file-upload'
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
    </>
  )
}

export default FileUpload
