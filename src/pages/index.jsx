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
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="text-left ml-8 mt-2 text-md font-display font-bold text-white">petecroke.com</div>
          <Album />
        </div>
        <div>
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  )
}
