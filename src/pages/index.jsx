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
        <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-BQ9GY2DQ3M');`,
            }}
        />
        <meta name="description" content="Pete Croke"/>
        <link rel="canonical" href="https://petecroke.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Discography &raquo; petecroke.com" />
        <meta property="og:description" content=" " />
        <meta property="og:url" content="https://petecroke.com/" />
        <meta property="og:site_name" content="petecroke.com" />
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
