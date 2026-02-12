import React, { useState } from 'react';
import { FileText, Check, Copy, Mail, Code2, Volume2 } from 'lucide-react';

const Hero = ({ t }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const SPEAKPIPE_URL = "https://www.speakpipe.com/msg/s/458738/1/on7j2jchiydrqopq"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miguelangelabou.work@gmail.com');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4" id="AboutMe">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 fade-enter">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            {t.aboutMe.availableToWork}
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block text-dynamic">{t.name}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2">
              {t.aboutMe.career}
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed" 
             dangerouslySetInnerHTML={{ __html: t.aboutMe.description }} />

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <a href="/Curriculum.pdf" download className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
              <FileText size={20} />
              {t.aboutMe.downloadCV}
            </a>
            
            <button onClick={handleCopyEmail} className="flex items-center gap-2 px-6 py-3.5 glass-panel text-dynamic hover:text-blue-500 rounded-xl font-medium transition-all hover:scale-105">
              {copySuccess ? <Check className="text-green-500" size={20} /> : <Mail size={20} />}
              {copySuccess ? t.aboutMe.copyEmail : t.aboutMe.copyEmail}
            </button>

            <a 
              href={SPEAKPIPE_URL} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/5 rounded-xl font-medium transition-all hover:scale-105 group"
            >
              <Volume2 size={20} className="group-hover:animate-pulse"/>
              <span className="hidden sm:inline">{t.aboutMe.englishVoice}</span>
              <span className="sm:hidden">{t.aboutMe.voice}</span>
            </a>
          </div>

          <div className="pt-8 flex gap-6 text-gray-400">
             <i className="fab fa-react text-2xl hover:text-blue-400 transition-colors cursor-help" title="React"></i>
             <i className="fab fa-node text-2xl hover:text-green-500 transition-colors cursor-help" title="Node.js"></i>
             <i className="fab fa-js text-2xl hover:text-yellow-400 transition-colors cursor-help" title="JavaScript"></i>
             <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
             <span className="text-sm font-mono self-center">{t.aboutMe.projectsCount}</span>
          </div>
        </div>

        {/* Image/Visual Content */}
        <div className="order-1 lg:order-2 flex justify-center fade-enter" style={{animationDelay: '0.2s'}}>
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
               <img 
                src="/assets/MIGUEL_ABOU.webp" 
                alt="Miguelangel Profile" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center gap-3">
                 <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full text-blue-600">
                    <Code2 size={24}/>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Experience</p>
                    <p className="font-bold text-dynamic text-lg">6+ Años</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;