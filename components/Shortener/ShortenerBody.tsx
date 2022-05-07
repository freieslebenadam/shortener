import React, { useState } from 'react'
import { HiLink } from "react-icons/hi"
import { LoadingIndicator } from "@components"
import { classNames } from '@lib'

const ShortenerBody = () => {
  const [linkInput, setLinkInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setLinkInput("")
    }, 2000)
  }

  return (
    <form className='flex py-2 text-lg' onSubmit={handleSubmit}>
      <div className="rounded-l shadow-md bg-neutral-50 flex-none flex justify-center items-center w-12">
        <HiLink size={24} />
      </div>
      <input type="text" 
        className='px-4 py-3 font-medium rounded-r shadow-md bg-white w-full flex-auto outline-none ring-0 focus:outline-none focus:ring-0 text-base disabled:text-gray-400'
        placeholder='https://...'
        pattern='.*\..*'
        spellCheck="false"
        autoComplete='off'
        value={linkInput}
        onChange={(e) => setLinkInput(e.target.value)}
        required
        disabled={loading}
      />
      <button 
        className={classNames(
          loading ? "bg-gray-400" : "bg-orange-600 hover:bg-orange-500",
          "flex-none flex justify-center items-center px-4 rounded shadow-md font-semibold text-white transition-all ease-in-out w-28 ml-1"
        )}
        type="submit"
        disabled={loading}
        >
        {loading?<LoadingIndicator />:"Shorten"}
      </button>
    </form>
  )
}

export default ShortenerBody