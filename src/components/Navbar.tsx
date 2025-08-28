import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            home
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/travels" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              travels
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
