"use client";

import React, { useMemo } from 'react';
import { DatabaseZap, LifeBuoy, Settings, HardDrive, Terminal } from 'lucide-react';
import { Competence } from '@/types';
import { COLOR_CLASSES } from '@/constants/themes';

interface SkillsProps {
  competences: Competence[];
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

const Skills = ({ competences }: SkillsProps) => {
  const skillBuckets = useMemo(() => competences.map(comp => ({
    ...comp,
    icon: getIcon(comp.icon_key)
  })), [competences]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillBuckets.map((bucket, idx) => (
        <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
           <div className="flex items-center gap-5 mb-6">
             <div className={`p-4 rounded-2xl ${COLOR_CLASSES[bucket.color] || 'bg-gray-500'} text-white shadow-lg`}>{bucket.icon}</div>
             <h4 className="font-black text-lg text-slate-900 uppercase">{bucket.category}</h4>
           </div>
           <div className="flex flex-wrap gap-2">
             {bucket.items.map((item, i) => (
               <span key={i} className="px-3 py-1.5 bg-white rounded-xl text-xs font-bold text-slate-600 border border-slate-200">{item}</span>
             ))}
           </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;