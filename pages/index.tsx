import type { NextPage } from 'next'
import { HiLink } from "react-icons/hi"

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-gray-700">
      <div className="container">
        <div className='p-10 rounded-xl bg-lighter-300 backdrop-blur shadow-lg ring-1 ring-lighter-500'>
          <div className='text-center mb-4'>
            <h1 className='font-extrabold text-3xl'>
              <span>Short.</span>
              <span className='bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-amber-500'>me</span>
            </h1>
            <p className='font-medium text-gray-400'>Paste a link you want to be shortened below:</p>
          </div>
          <div className='flex py-2 text-lg'>
            <div className="rounded-l shadow bg-white flex-none flex justify-center items-center w-10">
              <HiLink size={24} />
            </div>
            <input type="text" 
              className='px-4 py-3 font-medium shadow bg-white w-full flex-auto outline-none ring-0 focus:outline-none focus:ring-0 text-base'
              placeholder='https://...'
              spellCheck="false"
              autoComplete='off'
            />
            <button className='flex-none block px-4 rounded-r shadow bg-orange-600 font-semibold text-white transition-all ease-in-out hover:bg-orange-500'>
              Shorten
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
