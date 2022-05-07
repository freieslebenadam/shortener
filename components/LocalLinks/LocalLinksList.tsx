import { IShortLink } from '@interfaces'
import { useLocalLinks } from 'hooks'
import React, { useEffect, useState } from 'react'
import LocalLinksListItem from "./LocalLinksListItem"

const LocalLinksList = () => {
  const [loading, setLoading] = useState(true)
  const {localLinks} = useLocalLinks()

  useEffect(() => {
    if (loading && localLinks) {
      setLoading(false)
    }
  }, [])

  return (
    <div className='flex flex-col gap-1'>
      {!loading&&localLinks.map((link: IShortLink) => (
        <LocalLinksListItem
          key={link.id}
          link={link}
        />
      ))}
    </div>
  )
}

export default LocalLinksList