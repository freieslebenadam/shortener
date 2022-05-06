import type { NextPage } from 'next'
import { LocalLinks, Shortener } from "@components"
import { useLocalLinks } from 'hooks'

const Home: NextPage = () => {
  const {localLinks} = useLocalLinks()

  return (
    <div className="h-screen flex flex-col pt-48 items-center text-gray-700 selection:bg-dim-300 selection:text-white">
      <div className="container">
        <Shortener />

        <div className='my-5' />

        {localLinks?.length > 0 &&(
          <LocalLinks />
        )}
      </div>
    </div>
  )
}

export default Home
