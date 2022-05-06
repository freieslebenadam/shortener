import React from 'react'
import { motion } from "framer-motion"
import ShortenerHeader from './ShortenerHeader'
import ShortenerBody from './ShortenerBody'

const Shortener = () => {
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} className='p-10 rounded-xl bg-lighter-300 backdrop-blur shadow-lg ring-1 ring-lighter-500'>
      <ShortenerHeader />
      <ShortenerBody />
    </motion.div>
  )
}

export default Shortener