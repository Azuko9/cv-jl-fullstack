// src/services/formationService.ts
import { supabase } from '@/lib/supabaseClient';
import { Formation } from '@/types';

export const getFormations = async (): Promise<Formation[]> => {
  const { data, error } = await supabase
    .from('formations')
    .select('*')
    .order('period', { ascending: false });

  if (error) {
    console.error('Erreur Supabase (formations):', error.message);
    return [];
  }

  return data as Formation[] || [];
};
