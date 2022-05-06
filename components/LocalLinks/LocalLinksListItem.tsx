import { IShortLink } from '@interfaces'
import React from 'react'

type Props = {
  link: IShortLink
}

const LocalLinksListItem = ({ link }: Props) => {
  return (
    <div className='rounded shadow text-sm flex items-center bg-gray-50'>
      <a href={link.originalLink} className='block flex-auto px-4 py-2 overflow-hidden font-medium text-gray-600'>
        {link.originalLink}
      </a>
      <div className='flex-none px-2 text-orange-600 font-semibold'>
        {link.shortLink}
      </div>
      <div className='flex-none p-2'>
        <button className='flex bg-orange-600 text-white font-semibold uppercase px-6 py-2 transition-all hover:bg-orange-500 rounded'>
          Copy
        </button>
      </div>
    </div>
  )
}

export default LocalLinksListItem