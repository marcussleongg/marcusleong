'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
})

export default function Navbar() {
  const pathname = usePathname()
  
  // Define different navbar configurations for different pages
  const getNavConfig = () => {
    if (pathname === '/') {
      return {
        leftText: 'travels',
        leftLink: '/travels',
        rightText: 'blog',
        rightLink: '/blog'
      }
    } else if (pathname === '/travels') {
      return {
        leftText: 'about',
        leftLink: '/',
        rightText: 'blog',
        rightLink: '/blog'
      }
    } else if (pathname === '/blog') {
      return {
        leftText: 'about',
        leftLink: '/',
        rightText: 'travels',
        rightLink: '/travels'
      }
    }
    else if (pathname.startsWith('/blog')) {
      return {
        leftText: 'about',
        leftLink: '/',
        rightText: 'travels',
        rightLink: '/travels',
        thirdText: 'blog',
        thirdLink: '/blog'
      }
    }
  }
  
  const config = getNavConfig()
  
  return (
    <nav>
      <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-6">
                {config?.thirdLink && (
                  <Link 
                    href={config!.thirdLink}
                    className={`${ebGaramond.className} nav-link`}
                  >
                    {config!.thirdText}
                  </Link>
                )}
                <Link 
                  href={config!.leftLink}
                  className={`${ebGaramond.className} nav-link`}
                >
                  {config?.leftText}
                </Link>
                <Link 
                  href={config!.rightLink}
                  className={`${ebGaramond.className} nav-link`}
                >
                  {config!.rightText}
                </Link>
            <ThemeToggle />
          </div>
        </div>
    </nav>
  )
}
