import React, { useState } from 'react';

const Hero = ({ t, theme }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miguelangelabou.work@gmail.com');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section className="container mx-auto px-4 py-12" id="AboutMe">
      <div className="flex flex-col gap-12 md:gap-4 md:flex-row items-center md:items-start animate-fade-in">
        <div className="flex flex-col gap-4 items-center w-auto mb-10 md:mb-0">
          <img alt="Miguelangel Abou" className="rounded-full w-48" src="/assets/MIGUEL_ABOU.webp" />
          <p className="font-medium text-center rounded-3xl border border-border px-4 py-2 text-xs">
            {t.aboutMe.career}
          </p>
          <div className="inline-flex items-center gap-3">
             {/* ... ICONOS SOCIALES (Copia los SVGs del HTML original aquí) ... */}
             <a href="https://github.com/miguelangelabou" target="_blank" rel="noopener noreferrer" className="button transform transition duration-300 md:hover:scale-125">
                <i className="fab fa-github text-white text-xl"></i>
             </a>
             <a href="https://linkedin.com/in/miguelangel-abou-9333b0325" target="_blank" rel="noopener noreferrer" className="button transform transition duration-300 md:hover:scale-125">
                <i className="fab fa-linkedin text-white text-xl"></i>
             </a>
             <a href="mailto:miguelangelabou.work@gmail.com" className="button transform transition duration-300 md:hover:scale-125">
               <i className="fas fa-envelope text-white text-xl"></i>
             </a>
          </div>
        </div>

        <div>
          <div className="flex row gap-4 items-center">
            <h2 className="text-2xl font-bold mb-4 animate-fade-in">{t.aboutMe.title}</h2>
            <div className="flex items-center mb-3">
              <span className="relative inline-flex overflow-hidden rounded-full p-[2px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51e451_0%,#215521_50%,#51e451_100%)]"></span>
                <div 
                  className={`inline-flex gap-1 items-center justify-center w-full px-3 py-1 text-xs text-[rgb(22,163,74)] rounded-full backdrop-blur-3xl whitespace-nowrap ${theme === 'dark' ? 'bg-[rgba(18,18,18,1)]' : 'bg-white'}`}
                >
                  <span className="flex size-2 items-center"><span className="absolute inline-flex size-1.5 animate-ping rounded-xl bg-green-600"></span><span className="relative inline-flex size-1.5 rounded-xl bg-green-600"></span></span> 
                  {t.aboutMe.availableToWork}
                </div>
              </span>
            </div>
          </div>

          <p className="max-w-[700px] animate-fade-in">{t.aboutMe.description}</p>
          <div className="flex flex-col md:flex-row md:gap-4">
             <p className="mt-0 md:mt-2 animate-fade-in" dangerouslySetInnerHTML={{ __html: t.aboutMe.languages }}></p>
          </div>

          <div className="inline-flex items-center gap-2 mt-4 md:mt-4 lg:mt-6">
            <a className="animate-fade-in min-h-[40px] inline-flex items-center justify-center gap-1 text-white px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 transition-colors duration-300 ease-in-out" href="/Curriculum.pdf" target="_blank" download>
              <i className="fas fa-file-pdf" style={{ fontSize: '20px' }}></i> {t.aboutMe.downloadCV}
            </a>

            <button onClick={handleCopyEmail} className="relative min-h-[40px] inline-flex items-center justify-center gap-1 animate-fade-in text-white bg-blue-400 hover:bg-blue-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg">
               {copySuccess ? (
                 <>
                   <i className="fas fa-check"></i> Copied!
                 </>
               ) : (
                 <>
                   <i className="fas fa-copy"></i> {t.aboutMe.copyEmail}
                 </>
               )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;