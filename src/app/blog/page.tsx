import { getPosts } from '@/lib/posts'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="px-20 py-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts published yet.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-6">
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