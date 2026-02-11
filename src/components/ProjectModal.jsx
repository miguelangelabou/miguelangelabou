import React from 'react';

const ProjectModal = ({ project, onClose, t }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[50]"
      onClick={(e) => {
        // Cierra al hacer clic fuera del contenido
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <span 
        className="absolute top-4 right-4 text-white text-3xl cursor-pointer z-[55]" 
        onClick={onClose}
      >
        &times;
      </span>
      
      <div className="bg-base p-6 rounded-lg shadow-lg z-[51] max-w-lg w-full flex flex-col gap-6 relative animate-fade-in">
        <div>
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p className="mt-2">{project.description}</p>
        </div>

        <div className="grid gap-4 grid-cols-2 text-sm">
          <p>
            <strong>{t.projects.languages}</strong> <br/>
            {project.languages}
          </p>
          <p>
            <strong>{t.projects.releaseDate}</strong> <br/>
            {project.date}
          </p>
          <p>
            <strong>{t.projects.role}</strong> <br/>
            {project.rol}
          </p>
          <p>
            <strong>{t.projects.frameworks}</strong> <br/>
            {project.frameworks}
          </p>
        </div>

        <div className="mt-4 flex flex-row w-full space-x-4">
          <a 
            href={project.projectLink} 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 text-white text-center bg-blue-400 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg flex items-center justify-center gap-2"
          >
            Ver Proyecto
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 text-white text-center bg-black hover:bg-neutral-900 transition-colors px-4 py-2 rounded-lg flex items-center justify-center gap-2"
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;