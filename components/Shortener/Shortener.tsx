import React from 'react'
import ShortenerHeader from './ShortenerHeader'
import ShortenerBody from './ShortenerBody'
import { PagePanel } from '..'

const Shortener = () => {
  return (
    <PagePanel>
      <ShortenerHeader />
      <ShortenerBody />
    </PagePanel>
  )
}

export default Shortener