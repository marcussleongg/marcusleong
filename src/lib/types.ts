export interface Post {
  id: string // UUID
  slug: string
  title: string
  content: string
  published: boolean
  published_at: string | null // timestamp with timezone
}
