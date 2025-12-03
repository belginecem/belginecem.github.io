
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <Layers className="text-green-500" />
              Projects
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              A selection of games and applications I've developed, showcasing mechanics, SDK integrations, and cross-platform solutions. Click on a project to view detailed specs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard 
                project={project} 
                onClick={handleProjectClick}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default Projects;
