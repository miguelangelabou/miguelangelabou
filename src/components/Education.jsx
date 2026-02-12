import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ t }) => {
  const items = [
    { 
      title: t.education.universityTitle, 
      date: t.education.universityDate, 
      description: t.education.university 
    },
    { 
      title: t.education.languagesTitle, 
      date: t.education.languagesDate, 
      description: t.education.languages 
    },
    { 
      title: t.education.professionalDevelopmentTitle, 
      date: t.education.professionalDevelopmentDate, 
      description: t.education.professionalDevelopment 
    },
  ];

  return (
    <section className="py-20 px-4" id="Education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-dynamic">
          <GraduationCap className="text-blue-500" size={32} />
          {t.education.title}
        </h2>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="group relative pl-8 border-l-2 border-gray-200 dark:border-zinc-800 last:border-0 pb-8 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
              
              <div className="glass-panel p-6 rounded-2xl hover:border-blue-500/30 transition-all hover:translate-x-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <h3 className="text-xl font-bold text-dynamic">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-blue-500 font-mono bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;