import React from 'react';
import { SKILLS, LANGUAGES, CERTIFICATES } from '../constants';
import { Code2, Globe, Award, Cpu, Boxes } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-500/10 rounded border border-green-500/20">
                <Boxes className="text-green-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-slate-900/50 border-l-2 border-slate-700 p-4 hover:border-green-500 transition-all duration-300 group hover:bg-slate-800/50"
                >
                  <div className="flex justify-between items-center mb-1">
                     <span className="text-slate-200 font-medium font-mono text-sm">{skill}</span>
                     <Cpu size={14} className="text-slate-600 group-hover:text-green-400 transition-colors" />
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-green-500/60 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
                    <Globe className="text-blue-500" size={24} />
                 </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Languages</h2>
              </div>
              <div className="space-y-4">
                {LANGUAGES.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center bg-slate-900/50 p-4 border border-slate-800 rounded">
                    <span className="text-slate-200 font-medium">{lang.lang}</span>
                    <span className="text-xs font-mono text-green-400 border border-green-900 bg-green-900/20 px-2 py-1 rounded">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                  <Award className="text-yellow-500" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Certificates</h2>
              </div>
              <div className="space-y-4">
                {CERTIFICATES.map((cert, index) => (
                  <div key={index} className="p-4 bg-slate-900/50 border-l-2 border-yellow-500/50 hover:border-yellow-500 transition-colors">
                    <h3 className="text-slate-200 font-medium mb-1">{cert.title}</h3>
                    <p className="text-sm text-slate-500 font-mono">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;