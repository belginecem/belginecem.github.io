import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="text-green-500" size={24} />
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>

            <div className="space-y-10 relative">
              <div className="absolute left-[8px] top-2 bottom-2 w-[1px] bg-slate-800"></div>

              {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[17px] h-[17px] bg-slate-950 border-2 border-green-500 rotate-45 z-10 hover:bg-green-500 transition-colors duration-300 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
                  
                  <div className="group tech-border p-1 hover:bg-slate-800/30 transition-colors rounded">
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">{job.role}</h3>
                    <div className="text-green-500 font-medium text-sm mb-1 font-mono">{job.company}</div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3 bg-slate-900 w-fit px-2 py-0.5 rounded border border-slate-800">
                        <Calendar size={12} />
                        {job.period}
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-3">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-blue-500" size={24} />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="bg-slate-900/40 border border-slate-800 p-6 rounded hover:border-blue-500/50 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                  
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <h3 className="font-bold text-white text-lg">{edu.institution}</h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      {edu.period.split(' – ')[0]}
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium text-sm font-mono relative z-10">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;