import React from 'react';
import { 
  Database, Layout, Server, Settings, Code2, Globe, Cpu, 
  Layers, Cloud, Terminal, Shield, Workflow, FileText, 
  Binary, Zap, Network, Sparkles, Bot, BrainCircuit, 
  Package, Box, MessageSquare 
} from 'lucide-react';

const SkillPill = ({ icon, name, color }) => (
  <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all cursor-default group shadow-sm hover:shadow-md backdrop-blur-sm">
    <span className={`text-lg flex items-center justify-center w-6 group-hover:scale-110 transition-transform ${color || 'text-gray-500 dark:text-gray-400'}`}>
      {icon}
    </span>
    <span className="font-medium text-sm text-gray-700 dark:text-gray-200">{name}</span>
  </div>
);

const Skills = ({ t }) => {
  return (
    <section className="py-20 px-4 transition-colors duration-300" id="Skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dynamic">{t.skills.title}</h2>
          <p className="text-muted-dynamic max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Columna 1: Frontend Ecosystem */}
          <div className="glass-panel p-6 rounded-2xl h-fit hover:border-blue-500/30 transition-colors">
            <h3 className="font-mono text-sm text-blue-500 mb-6 uppercase tracking-wider font-bold flex items-center gap-2">
              <Layout size={18} /> {t.skills.frontendTitle}
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">Modern Frameworks</p>
                <div className="flex flex-wrap gap-3">
                  <SkillPill name="React" icon={<i className="fab fa-react"></i>} color="text-cyan-400" />
                  <SkillPill name="Next.js" icon={<span className="font-bold text-[10px]">NEXT</span>} color="text-black dark:text-white" />
                  <SkillPill name="Vue.js" icon={<i className="fab fa-vuejs"></i>} color="text-green-500" />
                  <SkillPill name="Angular" icon={<i className="fab fa-angular"></i>} color="text-red-600" />
                  <SkillPill name="Svelte" icon={<span className="font-bold text-[10px] text-orange-500">SV</span>} />
                  <SkillPill name="Electron" icon={<i className="fas fa-atom"></i>} color="text-cyan-300" />
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">UI & Languages</p>
                <div className="flex flex-wrap gap-3">
                  <SkillPill name="TypeScript" icon={<span className="font-bold text-xs">TS</span>} color="text-blue-600" />
                  <SkillPill name="JavaScript" icon={<i className="fab fa-js"></i>} color="text-yellow-400" />
                  <SkillPill name="Tailwind" icon={<i className="fas fa-wind"></i>} color="text-cyan-500" />
                  <SkillPill name="Bootstrap" icon={<i className="fab fa-bootstrap"></i>} color="text-purple-600" />
                  <SkillPill name="Sass" icon={<i className="fab fa-sass"></i>} color="text-pink-500" />
                  <SkillPill name="Figma" icon={<i className="fab fa-figma"></i>} color="text-pink-600" />
                  <SkillPill name="ShadCN" icon={<span className="font-bold text-[10px]">CN</span>} color="text-gray-800 dark:text-gray-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Backend, AI & Polyglot */}
          <div className="glass-panel p-6 rounded-2xl h-fit hover:border-green-500/30 transition-colors">
            <h3 className="font-mono text-sm text-green-500 mb-6 uppercase tracking-wider font-bold flex items-center gap-2">
              <Server size={18} /> {t.skills.backendTitle}
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">Server & Architecture</p>
                <div className="flex flex-wrap gap-3">
                    <SkillPill name="Node.js" icon={<i className="fab fa-node"></i>} color="text-green-500" />
                    <SkillPill name="Express" icon={<i className="fas fa-server"></i>} color="text-gray-600 dark:text-gray-300" />
                    <SkillPill name="NestJS" icon={<i className="fas fa-cat"></i>} color="text-red-500" />
                    <SkillPill name="Django" icon={<i className="fas fa-leaf"></i>} color="text-green-800" />
                    <SkillPill name=".NET Core" icon={<span className="font-bold text-[10px]">.NET</span>} color="text-purple-600" />
                    <SkillPill name="Laravel" icon={<i className="fab fa-laravel"></i>} color="text-red-600" />
                    <SkillPill name="GraphQL" icon={<i className="fas fa-project-diagram"></i>} color="text-pink-600" />
                    <SkillPill name="REST APIs" icon={<i className="fas fa-cloud"></i>} color="text-blue-500" />
                    <SkillPill name="Microservices" icon={<i className="fas fa-cubes"></i>} color="text-yellow-500" />
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">AI & External APIs</p>
                <div className="flex flex-wrap gap-3">
                    <SkillPill name="OpenAI API" icon={<BrainCircuit size={14} />} color="text-green-600" />
                    <SkillPill name="Gemini API" icon={<Sparkles size={14} />} color="text-blue-400" />
                    <SkillPill name="WhatsApp API" icon={<MessageSquare size={14} />} color="text-green-500" />
                    <SkillPill name="Instagram API" icon={<i className="fab fa-instagram"></i>} color="text-pink-500" />
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">Real-Time & Performance</p>
                <div className="flex flex-wrap gap-3">
                    <SkillPill name="WebSockets" icon={<Network size={14} />} color="text-gray-500 dark:text-gray-200" />
                    <SkillPill name="Socket.io" icon={<Zap size={14} />} color="text-yellow-500" />
                    <SkillPill name="Node Clusters" icon={<Cpu size={14} />} color="text-green-400" />
                    <SkillPill name="Redis" icon={<Layers size={14}/>} color="text-red-500" />
                    <SkillPill name="Bytenode" icon={<Binary size={14} />} color="text-indigo-500" />
                </div>
              </div>

              <div>
                 <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">Polyglot & Data</p>
                 <div className="flex flex-wrap gap-3">
                    <SkillPill name="Python" icon={<i className="fab fa-python"></i>} color="text-yellow-500" />
                    <SkillPill name="Python Docx" icon={<FileText size={14} />} color="text-blue-400" />
                    <SkillPill name="C#" icon={<span className="font-bold text-xs">C#</span>} color="text-purple-500" />
                    <SkillPill name="PHP" icon={<i className="fab fa-php"></i>} color="text-purple-400" />
                    <SkillPill name="PostgreSQL" icon={<i className="fas fa-database"></i>} color="text-blue-400" />
                    <SkillPill name="MongoDB" icon={<i className="fas fa-leaf"></i>} color="text-green-600" />
                    <SkillPill name="MySQL" icon={<i className="fas fa-database"></i>} color="text-blue-600" />
                    <SkillPill name="SQLite" icon={<i className="fas fa-database"></i>} color="text-green-500" />
                    <SkillPill name="SQL Server" icon={<i className="fas fa-server"></i>} color="text-red-500" />
                 </div>
              </div>
            </div>
          </div>

          {/* Columna 3: Cloud, DevOps & Automation */}
          <div className="glass-panel p-6 rounded-2xl h-fit hover:border-purple-500/30 transition-colors">
            <h3 className="font-mono text-sm text-purple-500 mb-6 uppercase tracking-wider font-bold flex items-center gap-2">
              <Cloud size={18} /> {t.skills.devopsTitle}
            </h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">Cloud & Infrastructure</p>
                <div className="flex flex-wrap gap-3">
                  <SkillPill name="AWS" icon={<i className="fab fa-aws"></i>} color="text-orange-500" />
                  <SkillPill name="Google Cloud" icon={<i className="fab fa-google"></i>} color="text-blue-500" />
                  <SkillPill name="Azure" icon={<i className="fab fa-microsoft"></i>} color="text-blue-400" />
                  <SkillPill name="Docker" icon={<i className="fab fa-docker"></i>} color="text-blue-500" />
                  <SkillPill name="Kubernetes" icon={<i className="fas fa-dharmachakra"></i>} color="text-blue-600" />
                  <SkillPill name="Nginx" icon={<Server size={14} />} color="text-green-600" />
                  <SkillPill name="Linux" icon={<i className="fab fa-linux"></i>} color="text-gray-500 dark:text-gray-300" />
                </div>
              </div>

              <div>
                 <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">Automation & Packaging</p>
                 <div className="flex flex-wrap gap-3">
                  <SkillPill name="n8n" icon={<Workflow size={14} />} color="text-red-400" />
                  <SkillPill name="Automatizaciones" icon={<Bot size={14} />} color="text-indigo-400" />
                  <SkillPill name="NSIS" icon={<Package size={14} />} color="text-yellow-600" />
                  <SkillPill name="Inno Setup" icon={<Box size={14} />} color="text-blue-500" />
                  <SkillPill name="Pascal Script" icon={<Code2 size={14} />} color="text-blue-300" />
                 </div>
              </div>

              <div>
                 <p className="text-xs text-muted-dynamic uppercase font-bold mb-3 tracking-widest opacity-70">Workflow & Tools</p>
                 <div className="flex flex-wrap gap-3">
                  <SkillPill name="Git" icon={<i className="fab fa-git-alt"></i>} color="text-red-500" />
                  <SkillPill name="GitHub" icon={<i className="fab fa-github"></i>} color="text-black dark:text-white" />
                  <SkillPill name="JasperReports" icon={<FileText size={14} />} color="text-green-600" />
                  <SkillPill name="CI/CD" icon={<i className="fas fa-sync"></i>} color="text-green-500" />
                  <SkillPill name="Postman" icon={<i className="fas fa-paper-plane"></i>} color="text-orange-500" />
                  <SkillPill name="Jira" icon={<i className="fab fa-jira"></i>} color="text-blue-500" />
                  <SkillPill name="Scrum" icon={<i className="fas fa-users"></i>} />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;