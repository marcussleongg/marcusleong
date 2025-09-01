import { supabase } from './supabaseClient'
import { StateData } from './types'

export async function getVisitedStates(): Promise<StateData[]> {
  const { data, error } = await supabase
    .from('visited_states')
    .select('state, name, dates, content')
    .order('state');

  if (error) {
    console.error('Error fetching visited states:', error);
    return [];
  }

  return data || [];
}
