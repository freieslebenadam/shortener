import { DefaultChildrenProps } from '@types'
import { useLocalStorage } from 'hooks'
import React, { useEffect, useState } from 'react'

interface LocalLinksContextInterface {
  localLinks?: any
}

const initialContext: LocalLinksContextInterface = {}

export const LocalLinksContext = React.createContext(initialContext)

const LocalLinksContextProvider = ({ children }: DefaultChildrenProps) => {
  const [localLinks, setLocalLinks] = useState([])
  const [storedLocalLinks, storeLocalLinks] = useLocalStorage("links", [])

  useEffect(() => {
    if (storedLocalLinks.length > 0) {
      setLocalLinks(storeLocalLinks)
    }
  }, [])

  useEffect(() => {
    storeLocalLinks(localLinks)
  }, [localLinks])

  // TODO: Function for adding new links

  return (
    <LocalLinksContext.Provider value={{localLinks}}>
      {children}
    </LocalLinksContext.Provider>
  )
}

export default LocalLinksContextProvider