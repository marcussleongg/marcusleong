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
        rightLink: '/blog',
        fourthText: 'research',
        fourthLink: '/research'
      }
    } else if (pathname === '/travels') {
      return {
        leftText: 'about',
        leftLink: '/',
        rightText: 'blog',
        rightLink: '/blog',
        fourthText: 'research',
        fourthLink: '/research'
      }
    } else if (pathname === '/blog') {
      return {
        leftText: 'about',
        leftLink: '/',
        rightText: 'travels',
        rightLink: '/travels',
        fourthText: 'research',
        fourthLink: '/research'
      }
    } else if (pathname === '/research') {
      return {
        leftText: 'about',
        leftLink: '/',
        rightText: 'travels',
        rightLink: '/travels',
        thirdText: 'blog',
        thirdLink: '/blog'
      }
    }
    else if (pathname.startsWith('/blog')) {
      return {
        leftText: 'about',
        leftLink: '/',
        rightText: 'travels',
        rightLink: '/travels',
        thirdText: 'blog',
        thirdLink: '/blog',
        fourthText: 'research',
        fourthLink: '/research'
      }
    }
  }
  
  const config = getNavConfig()
  
  return (
    <nav>
      <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-6">
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
                {config?.thirdLink && (
                  <Link
                    href={config!.thirdLink}
                    className={`${ebGaramond.className} nav-link`}
                  >
                    {config!.thirdText}
                  </Link>
                )}
                {config?.fourthLink && (
                  <Link
                    href={config!.fourthLink}
                    className={`${ebGaramond.className} nav-link`}
                  >
                    {config!.fourthText}
                  </Link>
                )}
            <ThemeToggle />
          </div>
        </div>
    </nav>
  )
}
