import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

const Projects = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    { ...t.projects.project2, img: "/assets/GlobosAnabell.png", tags: ["Next.js", "Firebase", "Stripe"] },
    { ...t.projects.project3, img: "/assets/CookieControl.png", tags: ["React", "Dashboard", "SaaS"] },
    { ...t.projects.project1, img: "/assets/QueTantoSabes.webp", tags: ["Gamification", "PHP", "MySQL"] },
    { ...t.projects.project4, img: "/assets/JMArquitectos.png", tags: ["Landing", "UX/UI", "Corporate"] },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5" id="Projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-dynamic">{t.projects.title}</h2>
            <p className="text-gray-500">{t.projects.subtitle}</p>
          </div>
          <a href="https://github.com/miguelangelabou" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-sm font-mono text-blue-500 hover:underline">
            {t.projects.viewGithub} <ArrowUpRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-300"></div>
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <span className="bg-white text-black rounded-full p-3 flex shadow-lg">
                        <ArrowUpRight size={20} />
                    </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{project.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                  {project.preview}
                </p>
                
                {/* Modern Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags && project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-xs font-mono rounded text-gray-600 dark:text-gray-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            t={t} 
        />
      )}
    </section>
  );
};

export default Projects;