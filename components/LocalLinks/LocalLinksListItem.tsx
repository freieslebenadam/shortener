import { IShortLink } from '@interfaces'
import { classNames } from '@lib'
import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa"

type Props = {
  link: IShortLink
}

const LocalLinksListItem = ({ link }: Props) => {
  const [linkCopied, setLinkCopied] = useState(false)

  let formattedOriginalLink = link.originalLink.replace(/(http:\/\/|https:\/\/|www\.)/g, '')
  formattedOriginalLink = formattedOriginalLink.replace(/\/$/g, '')

  const handleCopy = () => {
    setLinkCopied(true)

    navigator.clipboard.writeText(link.shortLink)

    setTimeout(() => {
      setLinkCopied(false)
    }, 1200)
  }

  return (
    <div className='rounded shadow text-sm flex flex-col sm:flex-row items-center bg-gray-50'>
      <a href={link.originalLink} target="_blank" className='block flex-auto px-4 py-2 overflow-hidden font-medium text-gray-600'>
        {formattedOriginalLink}
      </a>
      <a href={`http://${link.shortLink}`} target="_blank" className='block flex-none px-4 py-2 text-orange-600 font-semibold overflow-hidden'>
        {link.shortLink}
      </a>
      <div className='flex-none p-2 w-full sm:w-auto'>
        <button 
          className={classNames(linkCopied ? "bg-gray-800 cursor-default": "bg-orange-600 hover:bg-orange-500",
            "flex text-white font-semibold uppercase p-3 sm:p-2 sm:w-24 items-center overflow-hidden justify-center text-center transition-all rounded ease-in-out w-full")}
          onClick={handleCopy}
        >
          {linkCopied ? (
            <span className='inline-flex items-center gap-1'>
              <FaCheckCircle />
              Copied!
            </span>
          ) : "Copy"}
        </button>
      </div>
    </div>
  )
}

export default LocalLinksListItem