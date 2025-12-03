
import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Linkedin, Github, Terminal, Gamepad2, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Abstract Background Elements - Subtle 3D hints */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[80px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center gap-3 mb-6">
             <div className="flex items-center gap-2 text-green-400 font-mono bg-green-950/30 px-4 py-1.5 rounded border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <Terminal size={14} />
              <span className="tracking-wide text-sm">void Start()</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {PROFILE.name}
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-400 mb-8 flex items-center gap-3 flex-wrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 flex items-center gap-3">
              <Gamepad2 className="text-green-400" size={36} />
              {PROFILE.title}
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10 font-light border-l-2 border-slate-700 pl-6">
            {PROFILE.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded font-bold hover:bg-green-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <Mail size={18} />
              <span>Contact Me</span>
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
            </a>
            <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded font-medium hover:bg-slate-800 transition-colors border border-slate-700 hover:border-green-500/50">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded font-medium hover:bg-slate-800 transition-colors border border-slate-700 hover:border-green-500/50">
              <Github size={18} />
              GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
