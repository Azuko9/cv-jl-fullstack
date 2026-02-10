import Dashboard from '@/components/Dashboard';
import { getExperiences } from '@/services/experienceService';
import { getCompetences } from '@/services/competenceService';

export default async function Page() {
  // Optimisation : Chargement parallèle des données
  const [experiences, competences] = await Promise.all([
    getExperiences(),
    getCompetences()
  ]);

  return (
    <Dashboard experiences={experiences} competences={competences} />
  );
}
