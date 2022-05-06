import React from 'react'
import { Logo } from "@components"

const ShortenerHeader = () => {
  return (
    <div className='text-center mb-4'>
      <Logo />
      <p className='font-medium text-gray-400'>Paste a link you want to be shortened below:</p>
    </div>
  )
}

export default ShortenerHeader