import Navbar from '@/components/Navbar'

// ponytail: hardcoded list, move to a Supabase table like the blog if edits become frequent
// TODO: replace these placeholders with real papers
const papers = [
  {
    title: 'A Feasibility Study on Retrieval Practice Using Large Language Models',
    authors: 'Marcus Leong, Jennifer Rose, Lisa Dierker, Antonio Laverghetta Jr.',
    venue: 'Artificial Intelligence in Measurement and Education 2026',
    url: 'https://aclanthology.org/2026.aimecon-main.21/',
  },
]

export default function ResearchPage() {
  return (
    <div className="flex flex-col items-start px-5 py-8 max-w-full md:max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-end md:justify-start">
        <Navbar />
      </div>

      <div className="w-full border-b border-gray-200 my-4 [@media(hover:hover)]:hidden"></div>

      <div className="space-y-6 [@media(hover:hover)]:mt-8 [@media(hover:none)]:mt-5 flex-grow max-h-[70vh] overflow-y-auto [@media(hover:hover)]:border-3 border-dotted [@media(hover:hover)]:p-6 rounded-lg max-md:w-full md:w-2xl border-[hsl(331,13%,54%)]">
        {papers.map((paper) => (
          <article key={paper.title} className="flex flex-col">
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#987988] transition-colors"
            >
              <h2 className="text-xl font-semibold">{paper.title}</h2>
            </a>
            <p className="mt-1">
              {paper.authors.split(/(Marcus Leong)/).map((part, i) =>
                part === 'Marcus Leong' ? <strong key={i}>{part}</strong> : part
              )}
            </p>
            <p className="mt-1">{paper.venue}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
