import { supabase } from '@/lib/supabaseClient';
import { Experience } from '@/types';

export const getExperiences = async (): Promise<Experience[]> => {
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('period', { ascending: false });

  if (error) {
    console.error('Erreur Supabase (experiences):', error.message);
    return [];
  }

  return data as Experience[] || [];
};