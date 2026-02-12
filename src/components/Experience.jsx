import React from 'react';
import { ExternalLink } from 'lucide-react';

const Experience = ({ t }) => {
  return (
    <section className="container mx-auto px-4 lg:px-0 animate-fade-in mb-12" id="Experience">
      <h2 className="text-2xl font-bold mb-2">{t.experience.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        <div className="flex-col gap-[4%] items-start mt-6 bg-card p-6 rounded-lg shadow-lg transform transition duration-300">
          <div className="text-left w-full inline-flex gap-[4%]">
            <img 
              alt="Skynoff Technology" 
              className="rounded-full w-12 h-12 my-auto" 
              src="/assets/SKYNOFF_TECHNOLOGY.webp"
            />
            <div className="flex-col">
              <h1 className="text-xl font-bold">Skynoff Technology</h1>
              <h6 className="opacity-70 leading-none text-xs mb-2">{t.experience.experience1.dateRole}</h6>
            </div>
            <a 
              className="text-white bg-blue-400 md:hover:bg-transparent md:hover:text-blue-400 border-2 border-blue-400 transition-colors duration-300 ease-in-out p-1 rounded-lg ml-auto h-fit max-h-fit" 
              href="https://www.linkedin.com/company/skynoff-technologies/" 
              target="_blank" 
              rel="noreferrer"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <p className="mt-4">{t.experience.experience1.description}</p>
        </div>  
      </div>
    </section>
  );
};

export default Experience;