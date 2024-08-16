import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import PropTypes from 'prop-types'

export default function HistoryCont({ title, name, dateAndTime }) {
  return (
    <>
      <div className='my-1'>
        <p className='text-[13px] font-light text-gray-800'>{title}</p>
        <div className='flex mt-2 align-center'>
          <Avatar className='w-5 h-5'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className='ml-2 text-xs text-blue-500 underline'>{name}</span>
          <span className='ml-2 text-xs text-gray-800'>,{dateAndTime}</span>
        </div>
      </div>
    </>
  )
}

HistoryCont.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dateAndTime: PropTypes.string.isRequired,
}
