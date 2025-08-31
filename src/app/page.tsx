import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Caveat } from 'next/font/google'
import { supabase } from '@/lib/supabaseClient'

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
})

const { data } = supabase.storage.from('media').getPublicUrl('IMG_4325.jpeg')

export default function Page() {
    
    return (
        <div className="px-10 py-8 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-8">
          <h1 className={`${caveat.className} text-7xl name`}>Marcus Leong</h1>
          <Navbar />
            <div className="w-64 h-64 overflow-hidden rounded-lg">
              <Image 
                src={data.publicUrl} 
                alt="meow" 
                width={400} 
                height={400}
                className="object-cover object-center w-full h-full scale-180"
              />
            </div>
          <div>
            <p>Hi! I&apos;m a second-year undergrad at Wesleyan University, planning to declare
              a major in computer science (I tend to do things all over the place though).
            </p>
            <p>
              Being from a tiny city state, Singapore, I really enjoy backpacking and experiencing
              how big the world is, and try my best to see how different people live.
            </p>
          </div>
        </div>
    )
  }