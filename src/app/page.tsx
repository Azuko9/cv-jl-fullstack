import Dashboard from '@/components/Dashboard';
import { getExperiences } from '@/services/experienceService';
import { getCompetences } from '@/services/competenceService';
import { getFormations } from '@/services/formationService';

export default async function Page() {
  // Optimisation : Chargement parallèle des données
  const [experiences, competences, formations] = await Promise.all([
    getExperiences(),
    getCompetences(),
    getFormations()
  ]);

  return (
    <Dashboard experiences={experiences} competences={competences} formations={formations} />
  );
}
