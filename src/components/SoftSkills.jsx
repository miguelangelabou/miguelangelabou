import React from 'react';

const SoftSkills = ({ t }) => {
  const skills = [
    { title: t.skills.communicationTitle, desc: t.skills.communicationDescription },
    { title: t.skills.teamworkTitle, desc: t.skills.teamworkDescription },
    { title: t.skills.problemSolvingTitle, desc: t.skills.problemSolvingDescription },
    { title: t.skills.timeManagementTitle, desc: t.skills.timeManagementDescription },
    { title: t.skills.proactivityTitle, desc: t.skills.proactivityDescription },
    { title: t.skills.empathyTitle, desc: t.skills.empathyDescription },
  ];

  return (
    <section className="container mx-auto p-6 animate-fade-in bg-card rounded-lg shadow-lg my-12" id="SoftSkills">
      <h2 className="text-2xl font-bold mb-8">{t.skills.softSkillsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            {/* Renderizamos el título con HTML porque incluye el icono <i> en la traducción */}
            <h3 
              className="text-xl font-bold mb-2 md:mb-4" 
              dangerouslySetInnerHTML={{ __html: skill.title }} 
            />
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section> 
  );
};

export default SoftSkills;