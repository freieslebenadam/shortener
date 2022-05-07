import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const NotFoundPage = () => {
  const [redirectTimer, setRedirectTimer] = useState(3)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])

  useEffect(() => {
    if (redirectTimer !== 1) {
      setTimeout(() => {
        setRedirectTimer(prev => prev - 1)
      }, 1000)
    }
  }, [redirectTimer])

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-gray-700">
      <h1 className="text-7xl font-extrabold">404</h1>
      <h2 className="text-3xl font-bold">Not found</h2>

      <div className="mt-5 flex flex-col items-center">
        <p className="text-lg font-medium">Redirecting in:</p>
        <p className="text-3xl font-black text-orange-600">{redirectTimer}</p>
      </div>
    </div>
  )
}

export default NotFoundPage