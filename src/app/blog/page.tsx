import { getPosts } from '@/lib/posts'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="flex flex-col items-start px-5 py-8 max-w-full md:max-w-7xl mx-auto">
      <div className="flex justify-end md:justify-start">
        <Navbar border-b border-gray-200 />
      </div>

      <div className="w-full border-b border-gray-200 my-4"></div>
      
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts published yet.</p>
      ) : (
        <div className="space-y-6 border-4 border-dotted border-spacing-x-3 border-gray-200 p-6 rounded-lg min-w-2xl">
          {posts.map((post) => (
            <article key={post.id} className="pb-6">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <time 
                    dateTime={post.published_at}
                    className="text-sm text-gray-500 mb-2 block"
                  >
                    {new Date(post.published_at).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}