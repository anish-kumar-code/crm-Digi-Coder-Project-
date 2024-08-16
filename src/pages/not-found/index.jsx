// src/pages/not-found/index.js
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-gray-800'>404</h1>
        <p className='mt-2 text-xl text-gray-600'>Page Not Found</p>
        <p className='mt-2 text-gray-600'>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button className='mt-6' onClick={goHome}>
          Go to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
