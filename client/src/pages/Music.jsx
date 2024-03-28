import React from 'react'
import { Link } from 'react-router-dom'

const Music = () => {
  return (
    <div className='group relative w-full border border-amber-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
  <Link to='/music'>
    <img
      src='https://www.frpeterpreble.com/wp-content/uploads/2019/07/SERMON.png'
      alt='Music cover'
      className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
    />
  </Link>
  <div className='p-3 flex flex-col gap-2'>
    <p className='text-lg font-semibold line-clamp-2'>Cool music 1</p>
    <span className='italic text-sm'>Music</span>
    <Link
      to='/poster'
      className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
    >
      Read more
    </Link>
  </div>
</div>
  )
}

export default Music