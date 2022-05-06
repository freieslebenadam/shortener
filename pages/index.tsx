import { classNames } from 'lib'
import type { NextPage } from 'next'
import { useState } from 'react'
import { HiLink } from "react-icons/hi"
import { Logo, LoadingIndicator } from "../components"
import { motion } from "framer-motion"

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className="h-screen flex flex-col justify-center items-center text-gray-700">
      <div className="container">
        <motion.div initial={{scale:0}} animate={{scale:1}} className='p-10 rounded-xl bg-lighter-300 backdrop-blur shadow-lg ring-1 ring-lighter-500'>
          <div className='text-center mb-4'>
            <Logo />
            <p className='font-medium text-gray-400'>Paste a link you want to be shortened below:</p>
          </div>
          <div className='flex py-2 text-lg'>
            <div className="rounded-l shadow-md bg-neutral-50 flex-none flex justify-center items-center w-12">
              <HiLink size={24} />
            </div>
            <input type="text" 
              className='px-4 py-3 font-medium rounded-r shadow-md bg-white w-full flex-auto outline-none ring-0 focus:outline-none focus:ring-0 text-base'
              placeholder='https://...'
              spellCheck="false"
              autoComplete='off'
            />
            <button 
              className={classNames(
                loading ? "bg-gray-400" : "bg-orange-600 hover:bg-orange-500",
                "flex-none flex justify-center items-center px-4 rounded shadow-md font-semibold text-white transition-all ease-in-out w-28 ml-1"
              )}
              onClick={() => {
                if (!loading) {
                  setLoading(true)
                  setTimeout(() => {
                    setLoading(false)
                  }, 2000)
                }
              }}
              disabled={loading}
              >
              {loading?<LoadingIndicator />:"Shorten"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
