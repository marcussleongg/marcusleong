import { getPosts } from '@/lib/posts'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="flex flex-col items-start px-5 py-8 max-w-full md:max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-end md:justify-start">
        <Navbar border-b border-gray-200 />
      </div>

      <div className="w-full border-b border-gray-200 my-4 [@media(hover:hover)]:hidden"></div>
      
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts published yet.</p>
      ) : (
        <div className="space-y-6 [@media(hover:hover)]:mt-8 [@media(hover:none)]:mt-5 flex-grow max-h-[70vh] overflow-y-auto [@media(hover:hover)]:border-3 border-dotted [@media(hover:hover)]:p-6 rounded-lg max-md:w-full md:min-w-2xl border-[hsl(331,13%,54%)]">
          {posts.map((post) => (
            <article key={post.id} className="pb-6 flex flex-col">
              <Link href={`/blog/${post.slug}`} className="group post-link">
                <div className="flex justify-between items-center group-hover:text-[#987988] transition-colors">
                  <h2 className="text-lg mb-2">
                    {post.title}
                  </h2>
                  <time 
                      dateTime={post.published_at}
                      className="text-sm mb-2 block"
                    >
                      {new Date(post.published_at).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}