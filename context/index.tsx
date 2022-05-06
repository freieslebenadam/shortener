import React from 'react'
import { DefaultChildrenProps } from '@types'

const ContextProvider = ({ children }: DefaultChildrenProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ContextProvider