import React from 'react';

const SkillPill = ({ icon, name, color }) => (
  <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-700/50 rounded-lg hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all cursor-default group shadow-sm hover:shadow-md">
    <span className={`text-lg group-hover:scale-110 transition-transform ${color || 'text-gray-500'}`}>{icon}</span>
    <span className="font-medium text-sm text-gray-700 dark:text-gray-200">{name}</span>
  </div>
);

const Skills = ({ t }) => {
  return (
    <section className="py-20 px-4" id="Skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Frontend */}
          <div className="glass-panel p-6 rounded-2xl md:col-span-1">
            <h3 className="font-mono text-sm text-blue-500 mb-6 uppercase tracking-wider font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> {t.skills.frontendTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill name="React" icon={<i className="fab fa-react"></i>} color="text-cyan-400" />
              <SkillPill name="Next.js" icon={<span className="font-bold text-xs">NEXT</span>} color="text-black dark:text-white" />
              <SkillPill name="TypeScript" icon={<span className="font-bold text-xs">TS</span>} color="text-blue-600" />
              <SkillPill name="Tailwind" icon={<i className="fas fa-wind"></i>} color="text-cyan-500" />
              <SkillPill name="HTML5" icon={<i className="fab fa-html5"></i>} color="text-orange-500" />
              <SkillPill name="CSS3" icon={<i className="fab fa-css3-alt"></i>} color="text-blue-500" />
              <SkillPill name="Figma" icon={<i className="fab fa-figma"></i>} color="text-purple-500" />
            </div>
          </div>

          {/* Backend */}
          <div className="glass-panel p-6 rounded-2xl md:col-span-1">
            <h3 className="font-mono text-sm text-green-500 mb-6 uppercase tracking-wider font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> {t.skills.backendTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill name="Node.js" icon={<i className="fab fa-node"></i>} color="text-green-500" />
              <SkillPill name="Express" icon={<i className="fas fa-server"></i>} />
              <SkillPill name="NestJS" icon={<i className="fas fa-cat"></i>} color="text-red-500" />
              <SkillPill name="Python" icon={<i className="fab fa-python"></i>} color="text-yellow-500" />
              <SkillPill name="PHP" icon={<i className="fab fa-php"></i>} color="text-purple-400" />
              <SkillPill name="MySQL" icon={<i className="fas fa-database"></i>} color="text-blue-800" />
              <SkillPill name="PostgreSQL" icon={<i className="fas fa-database"></i>} color="text-blue-400" />
              <SkillPill name="Firebase" icon={<i className="fas fa-fire"></i>} color="text-yellow-400" />
            </div>
          </div>

           {/* Tools & Soft Skills */}
           <div className="glass-panel p-6 rounded-2xl md:col-span-1">
            <h3 className="font-mono text-sm text-purple-500 mb-6 uppercase tracking-wider font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> {t.skills.devopsTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill name="Git" icon={<i className="fab fa-git-alt"></i>} color="text-red-500" />
              <SkillPill name="Docker" icon={<i className="fab fa-docker"></i>} color="text-blue-500" />
              <SkillPill name="AWS" icon={<i className="fab fa-aws"></i>} color="text-orange-500" />
              <SkillPill name="English B2" icon={<i className="fas fa-language"></i>} />
              <SkillPill name="Liderazgo" icon={<i className="fas fa-users"></i>} />
              <SkillPill name="Agile" icon={<i className="fas fa-sync"></i>} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;