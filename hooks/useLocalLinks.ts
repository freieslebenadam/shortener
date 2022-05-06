import { LocalLinksContext } from "context/LocalLinksContext"
import { useContext } from "react"

const useLocalLinks = () => {
  return useContext(LocalLinksContext)
}

export default useLocalLinks