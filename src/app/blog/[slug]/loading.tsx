import Navbar from '@/components/Navbar'

export default function Loading() {
  return (
    <div className="flex flex-col items-start px-5 py-8 max-w-full md:max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-end md:justify-start">
        <Navbar border-b border-gray-200 />
      </div>

      <div className="w-full border-b border-gray-200 my-4 [@media(hover:hover)]:hidden"></div>
      <div className="space-y-6 mt-8 flex-grow max-h-[70vh] overflow-y-auto [@media(hover:hover)]:border-3 border-dotted p-6 rounded-lg max-md:w-full md:min-w-2xl border-[hsl(331,13%,54%)] flex justify-center items-center">
        <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
