
import React from 'react';
import { Project } from '../types';
import { PlayCircle, Smartphone, Monitor, Code } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group flex flex-col h-full bg-slate-900/80 border border-slate-800 overflow-hidden hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:border-green-500/50 transition-all duration-300 relative cursor-pointer"
    >
      
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-600 group-hover:border-green-500 transition-colors z-20"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-600 group-hover:border-green-500 transition-colors z-20"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-600 group-hover:border-green-500 transition-colors z-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-600 group-hover:border-green-500 transition-colors z-20"></div>

      <div className="relative h-48 w-full overflow-hidden bg-slate-950 group">
        <img 
          src={project.imageUrls[0]} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        />
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <div className="flex items-center gap-2 text-green-400 border border-green-500 px-4 py-2 rounded-full bg-black/80">
                <PlayCircle size={20} />
                <span className="font-mono text-sm font-bold">VIEW DETAILS</span>
            </div>
        </div>

        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-xs text-white flex items-center gap-1 border border-white/10 shadow-lg">
           {project.platform === 'iOS' || project.platform === 'Android' ? (
            <Smartphone size={12} className="text-blue-400" />
          ) : (
            <Monitor size={12} className="text-purple-400" />
          )}
          <span className="font-mono uppercase text-[10px] tracking-wider">{project.platform}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10 bg-slate-900">
        <div className="mb-3">
          <span className="text-[10px] uppercase tracking-widest font-bold text-green-500/80 border border-green-900 bg-green-900/10 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow border-l border-slate-800 pl-3">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
             <button className="text-sm font-medium text-slate-300 flex items-center gap-2 group-hover:text-white transition-colors">
               <Code size={14} className="text-slate-500 group-hover:text-green-500" />
               View Details
             </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
