import Head from 'next/head'

//import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
//import { FreeChapters } from '@/components/FreeChapters'
import { Album } from '@/components/Album'
/*import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'*/
import {Aside} from "@/components/Aside";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          petecroke.com
        </title>
        <meta name="description" content="Pete Croke"/>
      </Head>
      <div className="flex">
        <div>
          <Aside />
        </div>
        <div className="rounded-md border-red-700">
          <div className="float-right mr-8 mt-2 text-sm text-white">petecroke.com</div>
          <Album />
        </div>
        {/*
        <NavBar />
        <TableOfContents />
        <Testimonial
            id="tommy-stroman-testimonial-1"
            author={{
              name: 'Tommy Stroman',
              role: 'Front-end developer',
              image: avatarImage1,
            }}
        >
          <p>
            “I didn’t know a thing about icon design until I read this book. Now I
            can create any icon I need in no time. Great resource!”
          </p>
        </Testimonial>
        <Screencasts />
        <Testimonial
            id="gerardo-stark-testimonial-2"
            author={{
              name: 'Gerardo Stark',
              role: 'Creator of Pandemicons',
              image: avatarImage2,
            }}
        >
          <p>
            “I’ve tried to create my own icons in the past but quickly got
            frustrated and gave up. Now I sell my own custom icon sets online.”
          </p>
        </Testimonial>
        <Resources />
        <FreeChapters />
        <Pricing />
        <Testimonials />
        <Author />*/}
      </div>
      <Footer />
    </>
  )
}
