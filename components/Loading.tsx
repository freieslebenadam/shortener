import React from 'react'

const Loading = () => {
  return (
    <div className='inline-flex justify-center items-center h-5 w-5 rounded-full border-t-2 border-white animate-spin'>
      <div className='inline-flex justify-center items-center h-3 w-3 rounded-full border-r-2 border-white animate-spin'>
        <div className='inline-block h-1 w-1 rounded-full border-r-2 border-white animate-spin' />
      </div>
    </div>
  )
}

export default Loading