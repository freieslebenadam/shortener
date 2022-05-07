import { insertNewShortlink } from '@utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler({ body: { original_link, short_link }, headers: { host }}: NextApiRequest, res: NextApiResponse<any>) {
  console.log("Calling api/new handler", {
    original_link,
    short_link,
    host
  })

  if (original_link && short_link) {
    console.log("Original link and short link are valid!")
    const shortlink = `${host}/${short_link}`
    console.log("New shortlink: ", {shortlink})
    const response = insertNewShortlink(original_link, short_link)
    console.log("Request to db made:", {response})
    return res.status(200).json({response, short_link: shortlink})
  }
  
  return res.status(400)
}
