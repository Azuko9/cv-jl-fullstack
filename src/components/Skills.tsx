"use client";

import React, { useMemo } from 'react';
import { DatabaseZap, LifeBuoy, Settings, HardDrive, Terminal, ChevronDown } from 'lucide-react';
import { Competence } from '@/types';
import { COLOR_CLASSES } from '@/constants/themes';

interface SkillsProps {
  competences: Competence[];
  selectedSkill: string | null;
  setSelectedSkill: (id: string | null) => void;
}

const getIcon = (iconKey: string) => {
  switch (iconKey) {
    case 'DatabaseZap': return <DatabaseZap size={24}/>;
    case 'LifeBuoy': return <LifeBuoy size={24}/>;
    case 'Settings': return <Settings size={24}/>;
    case 'HardDrive': return <HardDrive size={24}/>;
    default: return <Terminal size={24}/>;
  }
};

const Skills = ({ competences, selectedSkill, setSelectedSkill }: SkillsProps) => {
  const skillBuckets = useMemo(() => competences.map(comp => ({
    ...comp,
    icon: getIcon(comp.icon_key)
  })), [competences]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillBuckets.map((bucket, idx) => (
        <div key={bucket.id || idx} onClick={() => setSelectedSkill(selectedSkill === (bucket.id || String(idx)) ? null : (bucket.id || String(idx)))} className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer ${selectedSkill === (bucket.id || String(idx)) ? 'bg-white border-blue-500 shadow-2xl' : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:shadow-xl'}`}>
           <div className={`flex items-center justify-between ${selectedSkill === (bucket.id || String(idx)) ? 'mb-6' : ''}`}>
             <div className="flex items-center gap-5">
               <div className={`p-4 rounded-2xl ${selectedSkill === (bucket.id || String(idx)) ? 'bg-blue-600' : (COLOR_CLASSES[bucket.color] || 'bg-gray-500')} text-white shadow-lg transition-colors`}>{bucket.icon}</div>
               <h4 className={`font-black text-lg uppercase transition-colors ${selectedSkill === (bucket.id || String(idx)) ? 'text-blue-600' : 'text-slate-900'}`}>{bucket.category}</h4>
             </div>
             <ChevronDown className={`transition-transform duration-300 ${selectedSkill === (bucket.id || String(idx)) ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
           </div>
           {selectedSkill === (bucket.id || String(idx)) && (
             <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
               {bucket.items.map((item, i) => (
                 <span key={i} className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${selectedSkill === (bucket.id || String(idx)) ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-white text-slate-600 border-slate-200'}`}>{item}</span>
               ))}
             </div>
           )}
        </div>
      ))}
    </div>
  );
};

export default Skills;