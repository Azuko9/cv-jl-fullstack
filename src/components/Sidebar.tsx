"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, LayoutDashboard, Sun, Palette, Moon, MapPin, Phone, Mail } from 'lucide-react';
import { THEMES } from '@/constants/themes';

interface SidebarProps {
  theme: string;
  setTheme: (theme: string) => void;
  currentTheme: typeof THEMES.light;
}

const Sidebar = ({ theme, setTheme, currentTheme }: SidebarProps) => {
  return (
    <aside className={`w-full md:w-80 ${currentTheme.sidebar} p-8 flex flex-col border-r ${currentTheme.border} transition-all duration-500 shrink-0`}>
      <div className="mb-10 text-center">
        <div className={`w-48 h-48 mx-auto rounded-[2.5rem] overflow-hidden border-2 border-blue-500/30 group relative shadow-2xl transition-transform hover:-rotate-3 mb-6`}>
          <Image 
            src="/profile.jpg" 
            alt="Jean-Luc Cazalaa-Arribes" 
            width={192} 
            height={192} 
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h2 className={`font-black text-2xl leading-tight tracking-tighter ${theme === 'dark' ? 'text-white' : currentTheme.sidebarText}`}>
          JEAN-LUC <br/> CAZALAA-ARRIBES
        </h2>
        <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-[11px] font-black text-white rounded-full tracking-widest uppercase">
          <ShieldCheck size={14} /> Support Applicatif
        </div>
      </div>

      <nav className="space-y-1.5">
        <div className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold bg-blue-600 text-white shadow-xl shadow-blue-600/20`}>
          <LayoutDashboard size={20} /> Dashboard
        </div>
      </nav>

      <div className="mb-10 space-y-4 pt-6 border-t border-white/10">
        <div className={`p-2 rounded-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100/50'} border ${currentTheme.border} flex justify-between gap-1 shadow-inner`}>
          <button onClick={() => setTheme('light')} className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl transition-all cursor-pointer ${theme === 'light' ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-500'}`}>
            <Sun size={20}/>
          </button>
          <button onClick={() => setTheme('octime')} className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl transition-all cursor-pointer ${theme === 'octime' ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-500'}`}>
            <Palette size={20}/>
          </button>
          <button onClick={() => setTheme('dark')} className={`flex-1 flex flex-col items-center gap-1 p-3 rounded-xl transition-all cursor-pointer ${theme === 'dark' ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-500'}`}>
            <Moon size={20}/>
          </button>
        </div>
      </div>

      <div className={`py-6 space-y-5 border-t ${theme === 'dark' ? 'border-white/5' : 'border-slate-100'}`}>
         <div className="flex items-center gap-4"><MapPin size={18} className="text-blue-500" /><span className="text-xs font-bold uppercase">Mont (64)</span></div>
         <a href="tel:0633692108" className="flex items-center gap-4 hover:text-blue-500 transition-colors">
            <Phone size={18} className="text-blue-500" />
            <span className="text-xs font-bold uppercase">06 33 69 21 08</span>
         </a>
         <a href="mailto:cazalaajl@gmail.com" className="flex items-center gap-4 hover:text-blue-500 transition-colors">
            <Mail size={18} className="text-blue-500" />
            <span className="text-xs font-bold uppercase">cazalaajl@gmail.com</span>
         </a>
      </div>
    </aside>
  );
};

export default Sidebar;