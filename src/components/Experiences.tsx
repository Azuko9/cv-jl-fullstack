"use client";

import React from 'react';
import { Terminal, DatabaseZap, ChevronDown } from 'lucide-react';
import { DisplayExperience } from '@/types';

interface ExperiencesProps {
  experiences: DisplayExperience[];
  selectedExp: string | null;
  setSelectedExp: (id: string | null) => void;
}

const Experiences = ({ experiences, selectedExp, setSelectedExp }: ExperiencesProps) => {
  if (experiences.length === 0) {
    return (
      <div className="p-10 text-center border-2 border-dashed border-slate-200 rounded-4xl text-slate-400">
        <DatabaseZap size={48} className="mx-auto mb-4 opacity-20" />
        <p>Aucune expérience trouvée. Vérifiez la connexion Supabase.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {experiences.map((exp) => (
        <div key={exp.id} onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)} className={`p-10 rounded-[3rem] border transition-all cursor-pointer ${selectedExp === exp.id ? 'bg-white border-blue-500 shadow-2xl' : 'bg-white border-slate-100'}`}>
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
            <div className="flex gap-8">
              <div className={`p-6 rounded-4xl transition-all shadow-2xl ${selectedExp === exp.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                <Terminal size={32}/>
              </div>
              <div>
                <h4 className="font-black text-3xl text-slate-900 uppercase tracking-tighter">{exp.company}</h4>
                <p className="text-base font-black text-blue-600 uppercase">{exp.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-black bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-xl">{exp.date}</span>
              <ChevronDown className={`transition-transform duration-300 ${selectedExp === exp.id ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
            </div>
          </div>
          {selectedExp === exp.id && (
            <div className="pt-10 border-t border-slate-50 mt-12 space-y-10 animate-in slide-in-from-top-4 duration-500">
              <p className="text-lg text-slate-600 leading-relaxed font-bold bg-slate-50 p-8 rounded-4xl border-l-10 border-blue-500 italic shadow-inner">{exp.fullDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {exp.missions.map((m, i) => (
                  <div key={i} className="flex gap-5 text-sm text-slate-500 items-start group/m p-4 hover:bg-blue-50 rounded-2xl transition-all">
                    <Terminal size={22} className="text-blue-500 shrink-0" />
                    <span className="font-bold">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experiences;