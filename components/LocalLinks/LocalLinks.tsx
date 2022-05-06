import React from 'react'
import { PagePanel } from "@components"
import LocalLinksHeader from './LocalLinksHeader'
import LocalLinksList from './LocalLinksList'

const LocalLinks = () => {
  return (
    <PagePanel>
      <LocalLinksHeader />
      <LocalLinksList />
    </PagePanel>
  )
}

export default LocalLinks