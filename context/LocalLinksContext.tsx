import { IShortLink } from '@interfaces'
import { DefaultChildrenProps } from '@types'
import { useLocalStorage } from 'hooks'
import React, { useEffect, useState } from 'react'

interface LocalLinksContextInterface {
  localLinks: any,
  addNewLink: (originalLink: string, shortLink: string) => void
}

const initialContext: LocalLinksContextInterface = {
  localLinks: [],
  addNewLink: () => null
}

export const LocalLinksContext = React.createContext(initialContext)

const initialLinksState: IShortLink[] = []

const LocalLinksContextProvider = ({ children }: DefaultChildrenProps) => {
  const [localLinks, setLocalLinks] = useState(initialLinksState)
  const [storedLocalLinks, storeLocalLinks] = useLocalStorage("links", [])

  useEffect(() => {
    if (localLinks.length > 0)
    storeLocalLinks(localLinks)
  }, [localLinks])
  
  useEffect(() => {
    setLocalLinks(storedLocalLinks)
  }, [])

  const addNewLink = (originalLink: string, shortLink: string) => {
    const newLink: IShortLink = { 
      id: localLinks.length === 0 ? 1 : Math.max(...localLinks.map(link => link.id)) + 1,
      originalLink,
      shortLink
    }

    setLocalLinks((prev: IShortLink[]) => {
      return [
        ...prev,
        newLink
      ]
    })
  }

  return (
    <LocalLinksContext.Provider value={{localLinks, addNewLink}}>
      {children}
    </LocalLinksContext.Provider>
  )
}

export default LocalLinksContextProvider