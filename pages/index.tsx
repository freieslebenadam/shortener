import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-gray-700">
      <div className='p-5 rounded-xl bg-lighter-300 backdrop-blur shadow-lg'>
        <h1 className='font-extrabold text-3xl'>
          <span>Short.</span>
          <span className='bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-amber-500'>me</span>
        </h1>
      </div>
    </div>
  )
}

export default Home
