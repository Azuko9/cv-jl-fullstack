"use client"; // Obligatoire pour utiliser les hooks React (useState, useEffect)

import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2, Search, ChevronUp, DatabaseZap, FileText
} from 'lucide-react';
import { Experience, Competence, DisplayExperience, Formation } from '@/types';
import { THEMES } from '@/constants/themes';
import Sidebar from './Sidebar';
import Skills from './Skills';
import Experiences from './Experiences';
import Formations from './Formations';


interface DashboardProps {
  experiences?: Experience[];
  competences?: Competence[];
  formations?: Formation[];
}

const Dashboard = ({ experiences: initialData = [], competences = [], formations = [] }: DashboardProps) => {
  const [theme, setTheme] = useState('octime');
  const [selectedExp, setSelectedExp] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showLetter, setShowLetter] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const current = THEMES[theme as keyof typeof THEMES];

  // Utilisation exclusive des données Supabase
  const experiences: DisplayExperience[] = useMemo(() => initialData.map(exp => ({
    id: exp.id,
    company: exp.company,
    location: 'France', // Valeur par défaut car non présent dans la DB
    role: exp.role,
    date: exp.period,
    fullDesc: exp.details || '',
    missions: exp.missions || [],
    tags: ['Expérience']
  })), [initialData]);

  return (
    <div className={`min-h-screen ${current.bg} ${current.text} transition-all duration-700 font-sans p-2 sm:p-4 md:p-6`}>
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row shadow-2xl rounded-[3rem] overflow-hidden border ${current.border} min-h-225 bg-white transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        <Sidebar theme={theme} setTheme={setTheme} currentTheme={current} />

        {/* --- MAIN CONTENT --- */}
        <main className={`flex-1 overflow-y-auto ${current.card} p-6 md:p-12 transition-colors duration-500 relative`}>
          <div className="space-y-12">

            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 border-b border-slate-100 pb-10">
              <div className="space-y-3">
                <div className="flex items-center gap-4 group">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${experiences.length > 0 ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`}></div>
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                    {experiences.length > 0 ? 'Données Chargées' : 'En attente de données...'}
                  </span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter leading-[0.9] uppercase">Expertise <br /><span className="text-blue-600">Fonctionnelle</span></h1>
              </div>
              <div className="flex items-center gap-6 bg-blue-50 px-8 py-5 rounded-[2.5rem] border border-blue-100 shadow-xl shadow-blue-600/5">
                <div className="text-right">
                  <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest">Valeur Métier</p>
                  <p className="text-xl font-black text-slate-800 tracking-tighter">Support & SQL</p>
                </div>
                <DatabaseZap size={40} className="text-blue-600" />
              </div>
            </div>

            <section className="relative group overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-500">
              <div className="relative bg-slate-900 text-white p-10 md:p-16">
                <div className="relative z-10 space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4 text-blue-400 font-black uppercase text-xs tracking-[0.5em]"><Search size={20} /> Candidature Octime</div>
                    <button onClick={() => setShowLetter(!showLetter)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl">
                      {showLetter ? <ChevronUp size={16} /> : <FileText size={16} />}
                      {showLetter ? "Masquer la motivation" : "Voir ma motivation"}
                    </button>
                  </div>
                  <p className="text-2xl md:text-3xl leading-tight font-light italic">"Fort de 11 ans en relation client, je mets mon <span className="text-blue-400 font-bold">esprit logique</span> et ma <span className="text-blue-400 font-bold">maîtrise SQL</span> au service du Pôle Fonctionnel d'Octime."</p>

                  <div className={`overflow-hidden transition-all duration-1000 ${showLetter ? 'max-h-500 opacity-100 mt-12' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white text-slate-800 p-8 md:p-12 rounded-4xl shadow-inner border-t-8 border-blue-600 relative overflow-hidden">
                      <div className="relative z-10 space-y-6 text-base md:text-lg leading-relaxed text-slate-700">
                        <p className="font-bold text-blue-600 italic">À l'attention du Responsable du Pôle Fonctionnel,</p>
                        <p>C’est avec une vive motivation que je vous adresse ma candidature pour intégrer le <span className="font-bold text-blue-600">Pôle Fonctionnel d'Octime</span> à Biron. Habitant à Mont, rejoindre votre Direction du Service Client est une opportunité stimulante.</p>
                        <p>Fort de 11 ans d'expertise en relation client, j'ai développé la pédagogie indispensable pour assurer l'accueil technique. Ma maîtrise du SQL me permet d'assurer un diagnostic précis et un paramétrage applicatif réactif.</p>
                        <p>Je suis prêt à m'investir pleinement dans votre formation interne pour maîtriser vos règles de gestion. Mon objectif : accompagner vos clients dans l'optimisation de leur solution.</p>
                        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                          <div><p className="text-sm font-bold opacity-50">Sincèrement,</p><p className="text-xl font-black text-slate-900 uppercase">Jean-Luc CAZALAA-ARRIBES</p></div>
                          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-xs font-bold border border-blue-100 shadow-sm"><CheckCircle2 size={16} /> Prêt pour Biron (64)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Outils Support Octime</h3>
              </div>
              <Skills 
                competences={competences} 
                selectedSkill={selectedSkill}
                setSelectedSkill={setSelectedSkill}
              />
            </section>

            <section className="space-y-10">
              <div className="border-b border-slate-100 pb-6"><h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Analyse & Expériences</h3></div>
              <Experiences
                experiences={experiences}
                selectedExp={selectedExp}
                setSelectedExp={setSelectedExp}
              />
            </section>

            <section className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Parcours de Formation</h3>
              </div>
              <Formations formations={formations} />
            </section>
          </div>
          <footer className="mt-24 pt-12 border-t border-slate-100 opacity-40">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 text-center">© 2026 JEAN-LUC CAZALAA-ARRIBES</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;