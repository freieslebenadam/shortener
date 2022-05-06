import type { NextPage } from 'next'
import { Shortener } from "@components"

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-gray-700">
      <div className="container">
        <Shortener />
      </div>
    </div>
  )
}

export default Home
