import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Album } from '@/components/Album'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          petecroke.com
        </title>
        <meta name="description" content="Pete Croke"/>
      </Head>
      <div className="mx-auto max-w-7xl">
        <div>
          <div className="text-left ml-8 mt-2 text-md font-display font-bold text-white">petecroke.com</div>
          <Album />
        </div>
      </div>
      <Footer />
    </>
  )
}
