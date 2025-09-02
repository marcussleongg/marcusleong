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
        <div className="px-10 lg:-mt-30 max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto flex flex-col items-center text-left lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:gap-6 lg:items-center [@media(hover:none)]:p-20">
          {/* Top left: Name */}
          <h1 className={`${caveat.className} text-7xl [@media(hover:none)]:text-5xl name lg:justify-self-start lg:self-end lg:mb-15`}>Marcus Leong</h1>
          
          {/* Top right: Navbar */}
          <div className="flex justify-center lg:justify-self-end lg:self-end lg:mb-15">
            <Navbar />
          </div>
          
          {/* Bottom left: Image */}
          <div className="lg:w-86 lg:h-86 w-64 h-64 overflow-hidden rounded-lg lg:justify-self-start lg:self-center">
            <Image 
              src={data.publicUrl} 
              alt="meow" 
              width={400} 
              height={400}
              className="object-cover object-center w-full h-full scale-180"
            />
          </div>
          
          {/* Bottom right: Text */}
          <div className="lg:justify-self-start lg:self-center">
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-2 mb-8">
              {/* GitHub Link */}
              <a 
                href="https://github.com/marcussleongg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#a085c1] hover:text-[#b196d3]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-transform hover:scale-110"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com/in/marcussleongg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#a085c1] hover:text-[#b196d3]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-transform hover:scale-110"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="mb-4 text-lg">Hi! I&apos;m a second-year undergrad at Wesleyan University, planning to declare
              a major in computer science (I tend to do things all over the place though).
            </p>
            <p className="mb-4 text-lg">
              Being from a tiny city state, Singapore, I really enjoy travelling and experiencing
              how big the world is, and try my best to see how different people live. A 6-week solo
              backpacking trip across Eastern and Central Europe in the Summer of 2024 set it all off.
            </p>
          </div>
        </div>
    )
  }