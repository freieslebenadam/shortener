import { insertNewShortlink } from '@utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler({ body: { original_link, short_link }, headers: { host }}: NextApiRequest, res: NextApiResponse<any>) {
  if (original_link && short_link) {
    const shortlink = `${host}/${short_link}`
    const response = await insertNewShortlink(original_link, short_link)
    return res.status(200).json({ response, short_link: shortlink})
  }
  
  return res.status(400)
}
