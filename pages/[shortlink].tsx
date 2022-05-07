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
      router.push(`${shortlink.originalLink}`)
    } else {
      router.push(`/404`)
    }
  }, [])

  return null
}

export default ShortLinkRedirect

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const { data: shortlink, error } = await getShortlink(params?.shortlink)

  if (error) {
    throw error
  }

  const newShortlink: IShortLink = {
    id: shortlink[0].id,
    originalLink: shortlink[0].original_link,
    shortLink: shortlink[0].short_link
  }

  return {
    props: {
      shortlink: newShortlink
    }
  }
}