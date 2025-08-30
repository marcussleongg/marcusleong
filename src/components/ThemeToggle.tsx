'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const getIcon = () => {
    return theme === 'light' ? '☀️' : '🌙'
  }

  return (
    <div className="relative group">
      {/* Hover div that appears above */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 border-2 rounded-lg text-[hsl(331,80%,50%)] text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Shift+L
      </div>
      
      <button
        onClick={toggleTheme}
        className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:cursor-pointer"
      >
        <span className="text-lg">{getIcon()}</span>
      </button>
    </div>
  )
}
