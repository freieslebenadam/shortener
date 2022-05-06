import React from 'react'
import { DefaultChildrenProps } from '@types'
import LocalLinksContextProvider from './LocalLinksContext'

const ContextProvider = ({ children }: DefaultChildrenProps) => {
  return (
    <LocalLinksContextProvider>
      {children}
    </LocalLinksContextProvider>
  )
}

export default ContextProvider