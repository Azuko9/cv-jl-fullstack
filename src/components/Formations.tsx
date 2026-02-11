"use client";

import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Formation } from '@/types';

interface FormationsProps {
  formations: Formation[];
}

const Formations = ({ formations }: FormationsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {formations.map((formation) => (
        <div key={formation.id} className="group relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex flex-col justify-between h-full gap-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                 <div className=" flex gap-2 p-2 bg-blue-50 text-blue-600 rounded-xl">
                    <GraduationCap size={20} />
                    <h4 className="font-black text-slate-800 text-lg mb-1">{formation.title}</h4>
                 </div>
                 
                 <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <Calendar size={12} />
                    {formation.period}
                 </div>
              </div>
              
              <p className="text-slate-500 font-bold text-xs uppercase tracking-wider">{formation.institution}</p>
            </div>
            
            {formation.details && (
              <div className="border-t border-slate-50">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {formation.details}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formations;