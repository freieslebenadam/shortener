import React, { useEffect, useState } from 'react'
import { PagePanel } from "@components"
import LocalLinksHeader from './LocalLinksHeader'
import LocalLinksList from './LocalLinksList'
import { useLocalLinks } from 'hooks'

const LocalLinks = () => {
  const [loadingLinks, setLoadingLinks] = useState(true)
  const {localLinks} = useLocalLinks()

  useEffect(() => {
    if (loadingLinks && localLinks.length > 0) {
      setLoadingLinks(false)
    }
  }, [localLinks])

  if (loadingLinks) return null

  // TODO: Set maximum height and own scroll

  // TODO: Filter list by newest
  
  return (
    <PagePanel>
      <LocalLinksHeader />
      <LocalLinksList />
    </PagePanel>
  )
}

export default LocalLinks