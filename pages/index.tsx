import type { GetServerSideProps, NextPage } from 'next'
import { LocalLinks, Shortener } from "@components"

type Props = { host: string | null }

const Home: NextPage<Props> = ({ host }: Props) => {
  return (
    <div className="h-screen flex flex-col pt-48 items-center text-gray-700 selection:bg-dim-300 selection:text-white overflow-hidden">
      <div className="container">
        <Shortener />

        <div className='my-5' />

        <LocalLinks />
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> =
  async context => ({ props: { host: context.req.headers.host || null } })
