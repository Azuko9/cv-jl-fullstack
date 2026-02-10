import { supabase } from '@/lib/supabaseClient';
import { Competence } from '@/types';

export const getCompetences = async (): Promise<Competence[]> => {
  const { data, error } = await supabase
    .from('competences')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Erreur Supabase (competences):', error.message);
    return [];
  }

  return data as Competence[] || [];
};