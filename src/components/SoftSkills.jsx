import React from 'react';
import { MessageSquare, Users, Lightbulb, Clock, Rocket, ThumbsUp } from 'lucide-react';

const SoftSkills = ({ t }) => {
  const iconMap = {
    communication: <MessageSquare className="text-blue-500 h-5 w-5" />,
    teamwork: <Users className="text-green-500 h-5 w-5" />,
    problemSolving: <Lightbulb className="text-yellow-500 h-5 w-5" />,
    timeManagement: <Clock className="text-purple-500 h-5 w-5" />,
    proactivity: <Rocket className="text-orange-500 h-5 w-5" />,
    empathy: <ThumbsUp className="text-gray-500 h-5 w-5" />,
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
    <section className="container mx-auto p-6 bg-card rounded-lg shadow-lg my-12" id="SoftSkills">
      <h2 className="text-2xl font-bold mb-8">{t.skills.softSkillsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.id}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {iconMap[skill.id]} {skill.title}
            </h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section> 
  );
};

export default SoftSkills;