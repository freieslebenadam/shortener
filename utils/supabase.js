
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_API_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export const insertNewShortlink = async (originalLink, shortLink) => {
  return await supabase
    .from('shortlink')
    .insert([
    { original_link: originalLink, short_link: shortLink },
  ])
}

export const getShortlink = async (shortLink) => {
  return await supabase
    .from('shortlink')
    .select('*')
    .eq('short_link', shortLink)
    .single()
}