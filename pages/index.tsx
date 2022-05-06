import type { NextPage } from 'next'
import { LocalLinks, Shortener } from "@components"
import { useLocalLinks } from 'hooks'

const Home: NextPage = () => {
  const {localLinks} = useLocalLinks()

  return (
    <div className="h-screen flex flex-col pt-48 items-center text-gray-700">
      <div className="container">
        <Shortener />
        {localLinks.length > 0 &&(
          <LocalLinks />
        )}
      </div>
    </div>
  )
}

export default Home
