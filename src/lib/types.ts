import { USAStateAbbreviation } from '@mirawision/usa-map-react'

export interface Post {
  id: string // UUID
  slug: string
  title: string
  content: string
  published: boolean
  published_at: string // timestamp with timezone
}

export interface StateData {
  state: USAStateAbbreviation;
  name: string;
  dates: string[];
  content: string; // HTML content
}