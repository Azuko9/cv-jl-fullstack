import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug pour vérifier si les variables sont chargées (regardez votre terminal)
if (process.env.NODE_ENV === 'development') {
  console.log('--- Debug Supabase ---');
  console.log('URL:', supabaseUrl ? '✅ Trouvée' : '❌ Manquante');
  console.log('KEY:', supabaseAnonKey ? '✅ Trouvée' : '❌ Manquante');
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Attention: Les variables d\'environnement Supabase sont manquantes. L\'application fonctionnera en mode dégradé.');
}

// Valeurs par défaut pour éviter le crash au démarrage
const url = supabaseUrl || 'https://placeholder.supabase.co';
const key = supabaseAnonKey || 'placeholder';

export const supabase = createClient(url, key);