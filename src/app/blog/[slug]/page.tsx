import { getPost } from '@/lib/posts'
import Navbar from '@/components/Navbar'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col items-start px-5 py-8 max-w-full md:max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-end md:justify-start">
        <Navbar border-b border-gray-200 />
      </div>

      <div className="w-full border-b border-gray-200 my-4 [@media(hover:hover)]:hidden"></div>
<<<<<<< HEAD
      <div className="space-y-6 mt-8 flex-grow max-h-[70vh] overflow-y-auto border-3 border-dotted p-6 rounded-lg w-full max-w-2xl border-[hsl(331,13%,54%)] [@media(hover:none)]:hidden">
=======
      <div className="space-y-6 mt-8 flex-grow max-h-[70vh] overflow-y-auto border-3 border-dotted p-6 rounded-lg w-full max-w-2xl border-[hsl(331,13%,54%)]">
>>>>>>> 7ff6a43f8341d03ab5bde97dd3086db654dd2ab4
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-2">
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
        
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  )
}