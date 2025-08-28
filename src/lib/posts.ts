import { supabase } from './supabaseClient'
import type { Post } from './types'

/**
 * Get all published blog posts
 * @returns Promise<Post[]> - Array of published posts, sorted by published_at (newest first)
 */
export async function getPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('blog')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    throw new Error('Failed to fetch posts')
  }

  return data || []
}

/**
 * Get a single blog post by slug
 * @param slug - The post slug
 * @returns Promise<Post | null> - The post if found, null otherwise
 */
export async function getPost(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('blog')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // No rows returned - post not found
      return null
    }
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post')
  }

  return data
}