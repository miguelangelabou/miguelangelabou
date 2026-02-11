import React, { useState } from 'react';

const Projects = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    { ...t.projects.project1, img: "/assets/QueTantoSabes.webp", icon: "fas fa-code" },
    { ...t.projects.project2, img: "/assets/GlobosAnabell.png", icon: "fas fa-globe" },
    { ...t.projects.project3, img: "/assets/CookieControl.png", icon: "fas fa-globe" },
    { ...t.projects.project4, img: "/assets/JMArquitectos.png", icon: "fas fa-globe" },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-0 animate-fade-in mb-14" id="Projects">
      <h2 className="text-2xl font-bold mb-8">{t.projects.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[380px] md:max-w-full mx-auto">
        {projectsList.map((project, idx) => (
          <div 
            key={idx}
            className="bg-card p-6 rounded-lg shadow-lg flex flex-col justify-between h-full transform transition duration-300 md:hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="mb-4 mx-auto">
              <img alt={project.name} className="rounded w-full height-full" src={project.img} />
            </div>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p>{project.preview}</p>
            <div className="flex items-center space-x-3 justify-end mt-auto">
              <button className="text-white bg-blue-400 hover:bg-blue-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg mb-2 mt-6">
                 <i className={project.icon}></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Proyecto */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[50]">
          <span className="absolute top-4 right-4 text-white text-3xl cursor-pointer z-[55]" onClick={() => setSelectedProject(null)}>&times;</span>
          
          <div className="bg-base p-6 rounded-lg shadow-lg z-[51] max-w-lg w-full flex flex-col gap-6 relative">
            <div>
              <h2 className="text-xl font-bold">{selectedProject.name}</h2>
              <p className="mt-2">{selectedProject.description}</p>
            </div>

            <div className="grid gap-4 grid-cols-2 text-sm">
              <p><strong>{t.projects.languages}</strong> <br/>{selectedProject.languages}</p>
              <p><strong>{t.projects.releaseDate}</strong> <br/>{selectedProject.date}</p>
              <p><strong>{t.projects.role}</strong> <br/>{selectedProject.rol}</p>
              <p><strong>{t.projects.frameworks}</strong> <br/>{selectedProject.frameworks}</p>
            </div>

            <div className="mt-4 flex flex-row w-full space-x-4">
              <a href={selectedProject.projectLink} target="_blank" rel="noreferrer" className="flex-1 text-white text-center bg-blue-400 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg">Ver Proyecto</a>
              <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex-1 text-white text-center bg-black hover:bg-neutral-900 transition-colors px-4 py-2 rounded-lg">Ver en GitHub</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;