import React from 'react';
import { MessageSquare, Users, Lightbulb, Clock, Rocket, Heart } from 'lucide-react';

const SoftSkills = ({ t }) => {
  const iconMap = {
    communication: <MessageSquare className="text-blue-500" size={32} />,
    teamwork: <Users className="text-green-500" size={32} />,
    problemSolving: <Lightbulb className="text-yellow-500" size={32} />,
    timeManagement: <Clock className="text-purple-500" size={32} />,
    proactivity: <Rocket className="text-orange-500" size={32} />,
    empathy: <Heart className="text-red-500" size={32} />,
  };
  
  const skills = [
    { id: "communication", title: t.skills.communicationTitle, desc: t.skills.communicationDescription },
    { id: "teamwork", title: t.skills.teamworkTitle, desc: t.skills.teamworkDescription },
    { id: "problemSolving", title: t.skills.problemSolvingTitle, desc: t.skills.problemSolvingDescription },
    { id: "timeManagement", title: t.skills.timeManagementTitle, desc: t.skills.timeManagementDescription },
    { id: "proactivity", title: t.skills.proactivityTitle, desc: t.skills.proactivityDescription },
    { id: "empathy", title: t.skills.empathyTitle, desc: t.skills.empathyDescription },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black/20" id="SoftSkills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.skills.softSkillsTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="glass-panel p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-6 p-4 bg-gray-50 dark:bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {iconMap[skill.id]}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
};

export default SoftSkills;