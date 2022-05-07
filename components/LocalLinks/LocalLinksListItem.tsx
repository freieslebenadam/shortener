import { IShortLink } from '@interfaces'
import { classNames } from '@lib'
import React, { useState } from 'react'

type Props = {
  link: IShortLink
}

const LocalLinksListItem = ({ link }: Props) => {
  const [linkCopied, setLinkCopied] = useState(false)

  let formattedOriginalLink = link.originalLink.replace(/(http:\/\/|https:\/\/|www\.)/g, '')
  formattedOriginalLink = formattedOriginalLink.replace(/\/$/g, '')

  const handleCopy = () => {
    setLinkCopied(true)

    navigator.clipboard.writeText("OIJSDGIOSDOIGHOIS")

    setTimeout(() => {
      setLinkCopied(false)
    }, 1200)
  }

  return (
    <div className='rounded shadow text-sm flex items-center bg-gray-50'>
      <a href={link.originalLink} target="_blank" className='block flex-auto px-4 py-2 overflow-hidden font-medium text-gray-600'>
        {formattedOriginalLink}
      </a>
      <div className='flex-none px-2 text-orange-600 font-semibold'>
        {link.shortLink}
      </div>
      <div className='flex-none p-2'>
        <button 
          className={classNames(linkCopied ? "bg-gray-800 cursor-default": "bg-orange-600 hover:bg-orange-500",
            "flex text-white font-semibold uppercase px-6 py-2 transition-all rounded")}
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  )
}

export default LocalLinksListItem