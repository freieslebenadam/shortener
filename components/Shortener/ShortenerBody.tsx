import React, { useState } from 'react'
import { HiLink } from "react-icons/hi"
import { LoadingIndicator } from "@components"
import { classNames, generateString } from '@lib'
import { useLocalLinks } from 'hooks'

const ShortenerBody = () => {
  const [linkInput, setLinkInput] = useState("")
  const [loading, setLoading] = useState(false)
  const {addNewLink} = useLocalLinks()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setLoading(true)

    const shortlink = generateString(5)

    fetch('/api/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        original_link: linkInput,
        short_link: shortlink
      })
    }).then((response) => response.json())
    .then(({ short_link }) => {
      addNewLink(linkInput, short_link)
      setLoading(false)
      setLinkInput("")
    })
    .catch((error) => console.log(error))
  }

  return (
    <form className='flex flex-col gap-3 sm:gap-0 sm:flex-row py-2 text-lg' onSubmit={handleSubmit}>
      <div className='flex-auto flex'>
        <div className="rounded-l shadow-md bg-neutral-50 flex justify-center items-center w-12">
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
      </div>
      <button 
        className={classNames(
          loading ? "bg-gray-400" : "bg-orange-600 hover:bg-orange-500",
          "flex-auto sm:flex-none flex justify-center items-center px-4 py-2 sm:py-0 rounded shadow-md font-semibold text-white transition-all ease-in-out sm:w-28 sm:ml-1"
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