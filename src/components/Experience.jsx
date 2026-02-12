import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = ({ t }) => {
  return (
    <section className="py-20 px-4" id="Experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-500"/> 
            {t.experience.title}
        </h2>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12">
          
          {/* Item 1 */}
          <div className="relative pl-8 md:pl-12 group">
            <span className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-[#050505] transition-all group-hover:scale-125 shadow-lg shadow-blue-500/50"></span>
            
            <div className="glass-panel p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-4">
                    <img src="/assets/SKYNOFF_TECHNOLOGY.webp" alt="Skynoff" className="w-10 h-10 rounded-lg shadow-sm" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Skynoff Technology</h3>
                        <p className="text-blue-500 font-medium">Full Stack Developer</p>
                    </div>
                </div>
                <span className="font-mono text-xs text-gray-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                    {t.experience.experience1.dateRole.split('|')[0]}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.experience.experience1.description}
              </p>
              <div className="mt-4 flex gap-2">
                  <span className="text-xs border border-gray-200 dark:border-zinc-700 px-2 py-1 rounded text-gray-500">React</span>
                  <span className="text-xs border border-gray-200 dark:border-zinc-700 px-2 py-1 rounded text-gray-500">Node.js</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;