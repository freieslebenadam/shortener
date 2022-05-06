import { IShortLink } from '@interfaces'
import { useLocalLinks } from 'hooks'
import React from 'react'
import LocalLinksListItem from "./LocalLinksListItem"

const LocalLinksList = () => {
  const {localLinks} = useLocalLinks()

  return (
    <div className='flex flex-col gap-1'>
      {localLinks.map((link: IShortLink) => (
        <LocalLinksListItem
          key={link.id}
          link={link}
        />
      ))}
    </div>
  )
}

export default LocalLinksList