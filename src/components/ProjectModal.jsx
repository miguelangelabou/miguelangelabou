import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Calendar, Code2, Layers } from 'lucide-react';

const ProjectModal = ({ project, onClose, t }) => {
  if (!project) return null;

  // Bloquear scroll al abrir
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-[#0a0a0a] w-full max-w-2xl rounded-3xl shadow-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="h-48 sm:h-64 bg-gray-100 relative shrink-0">
          <img 
            src={project.img} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{project.name}</h2>
            <p className="text-blue-500 font-medium">{project.preview}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Code2 className="text-gray-400 shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">{t.projects.languages}</p>
                  <p className="text-sm">{project.languages}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="text-gray-400 shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">{t.projects.releaseDate}</p>
                  <p className="text-sm font-mono">{project.date}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Layers className="text-gray-400 shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">{t.projects.frameworks}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.frameworks.split(',').map((fw, i) => (
                      <span key={i} className="text-xs bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                        {fw.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8 text-gray-600 dark:text-gray-300">
            <p>{project.description}</p>
          </div>
          
          <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
            <a 
              href={project.projectLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <ExternalLink size={18} /> {t.projects.viewDemo}
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Github size={18} /> {t.projects.githubRepo}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;