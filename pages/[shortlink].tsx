import { IShortLink } from '@interfaces'
import { getShortlink } from '@utils/supabase'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type Props = {
  shortlink: IShortLink
}

const ShortLinkRedirect = ({ shortlink }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (shortlink) {
      if (shortlink.originalLink.match(/^http/g)) {
        router.push(`${shortlink.originalLink}`)
      } else {
        router.push(`http://${shortlink.originalLink}`)
      }
    } else {
      router.push(`/`)
    }
  }, [])

  return null
}

export default ShortLinkRedirect

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const { data: shortlink, error } = await getShortlink(params?.shortlink)

  if (error) {
    return { notFound: true }
  }

  const newShortlink: IShortLink = {
    id: shortlink.id,
    originalLink: shortlink.original_link,
    shortLink: shortlink.short_link
  }

  return {
    props: {
      shortlink: newShortlink
    }
  }
}