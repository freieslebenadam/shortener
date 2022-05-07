import { insertNewShortlink } from '@utils/supabase'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler({ body: { original_link, short_link }}: NextApiRequest, res: NextApiResponse<any>) {

  if (original_link && short_link) {
    const response = insertNewShortlink(original_link, short_link)
    return res.status(200).json({response})
  }
  
  return res.status(400)
}
