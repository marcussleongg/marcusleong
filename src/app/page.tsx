import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1>Marcus Leong</h1>
          <Navbar />
          <Image src="globe.svg" alt="globe" width={100} height={100}/>
          <p>Hi! I&apos;m a second-year undergrad at Wesleyan University, planning to declare
            a major in computer science. I tend to do things all over the place though, and 
            have momentary lapses thinking I&apos;ll study something completely different.
          </p>
          <p>
            Being from a tiny city state, Singapore, I really enjoy travelling and experiencing
            how big the world is, and try my best to see how different people live. I fell in love
            with backpacking, so I&apos;m often just going around with a trusty backpack.
          </p>
        </div>
    )
  }