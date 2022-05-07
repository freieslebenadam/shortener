import { useLocalLinks } from 'hooks'
import React from 'react'

const LocalLinksHeader = () => {
  const {localLinks} = useLocalLinks()

  return (
    <div className='text-left pb-1 mb-3 border-b border-dim-50'>
      <h1 className='font-semibold text-xl tracking-tight'>
        Your links
        {" "}
        <span className='font-semibld text-gray-400 tracking-wide text-base'>({localLinks?.length})</span>
      </h1>
    </div>
  )
}

export default LocalLinksHeader