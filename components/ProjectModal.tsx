
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types';
import { X, Play, Cpu, CheckCircle2, Smartphone, Monitor } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const galleryCount = project.gallery?.length || 0;
  const imageCount = project.imageUrls?.length || 0;
  const hasVideo = !!project.videoUrl;

  const totalMediaCount = (hasVideo ? 1 : 0) + galleryCount + imageCount;
  const isSingleMedia = totalMediaCount === 1;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div 
        className="relative bg-slate-900 w-full max-w-2xl max-h-[90vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
        onClick={handleContentClick}
      >
        <div className="shrink-0 flex items-start justify-between p-5 border-b border-slate-800 bg-slate-950">
          <div>
             <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1">{project.title}</h2>
             <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <span className="bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">
                  {project.category}
                </span>
                <span className="flex items-center gap-1">
                    {project.platform === 'iOS' || project.platform === 'Android' ? <Smartphone size={12}/> : <Monitor size={12}/>}
                    {project.platform}
                </span>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
          
          <div className={`flex ${isSingleMedia ? 'justify-center overflow-hidden' : 'overflow-x-auto snap-x snap-mandatory justify-start'} gap-0.5 bg-black h-64 md:h-72 custom-scrollbar`}>
             {project.videoUrl && (
                <div className={`snap-center shrink-0 ${isSingleMedia ? 'w-full' : 'w-full md:w-[80%]'} h-full relative group`}>
                  {project.videoUrl.includes("youtube.com") || project.videoUrl.includes("youtu.be") ? (
                    <iframe 
                      src={project.videoUrl.includes("watch?v=") 
                            ? project.videoUrl.replace("watch?v=", "embed/") 
                            : project.videoUrl
                          }
                      title={project.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video controls className="w-full h-full">
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  )}
                </div>
              )}

             {project.gallery?.map((img, idx) => (
                <div key={idx} className={`snap-center shrink-0 ${isSingleMedia ? 'w-full' : 'w-[85%] md:w-[60%]'} h-full relative`}>
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                </div>
             ))}

             {project.imageUrls.map((img, index) => (
                <div
                  key={index}
                  className={`snap-center shrink-0 ${isSingleMedia ? 'w-full' : 'w-[85%] md:w-[60%]'} h-full relative`}
                >
                  <img src={img} alt={`Screenshot ${index + 1}`} className="w-full h-full object-contain bg-black" />
                </div>
              ))}
          </div>
          
          {!isSingleMedia && (
            <div className="px-5 py-2 text-[10px] text-center text-slate-500 font-mono border-b border-slate-800">
              Swipe to see more media
            </div>
          )}

          <div className="p-5 space-y-6">
            <div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                        <Cpu size={14} /> Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack?.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 font-mono border border-slate-700">
                                {tech}
                            </span>
                        )) || <span className="text-xs text-slate-600">N/A</span>}
                    </div>
                </div>

                {project.features && (
                    <div className="space-y-2">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <CheckCircle2 size={14} /> Features
                        </h3>
                        <ul className="space-y-1">
                            {project.features.map((feat, i) => (
                                <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0"></span>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="pt-2 flex flex-col gap-2">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold text-sm transition-all shadow-lg hover:shadow-green-500/25"
                  >
                    <Play size={16} fill="currentColor" />
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
