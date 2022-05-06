import { DefaultChildrenProps } from '@types'
import React from 'react'
import { motion } from 'framer-motion'

const PagePanel = ({ children }: DefaultChildrenProps) => {
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} className='p-10 rounded-xl bg-lighter-300 backdrop-blur shadow-lg ring-1 ring-lighter-500'>
      {children}
    </motion.div>
  )
}

export default PagePanel