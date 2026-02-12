import React, { useState } from 'react';
import { FileText, Check, Copy } from 'lucide-react';

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
          <div className="inline-flex items-center gap-3" id="Contact">
              <a href="https://github.com/miguelangelabou" target="_blank" rel="noopener noreferrer" className="button transform transition duration-300 md:hover:scale-125"><svg className="icon" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"></path></svg></a>
              <a href="https://discord.com/invite/dtxTWehc9G" target="_blank" rel="noopener noreferrer" className="button transform transition duration-300 md:hover:scale-125"><svg className="icon" viewBox="0 0 100 100" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M85.778,24.561c-11.641-8.71-22.793-8.466-22.793-8.466s-1.14,1.302-1.14,1.302c13.839,4.152,20.27,10.257,20.27,10.257c-19.799-10.901-45.019-10.823-65.613,0c0,0,6.675-6.431,21.328-10.583c0,0-0.814-0.977-0.814-0.977s-11.071-0.244-22.793,8.466c0,0-11.722,21.084-11.722,47.052c0,0,6.838,11.722,24.829,12.292c0,0,3.012-3.582,5.454-6.675c-10.339-3.093-14.246-9.524-14.246-9.524c6.495,4.064,13.063,6.608,21.247,8.222c13.316,2.741,29.879-0.077,42.249-8.222c0,0-4.07,6.594-14.734,9.606c2.442,3.012,5.373,6.512,5.373,6.512C90.662,83.254,97.5,71.532,97.5,71.613C97.5,45.645,85.778,24.561,85.778,24.561z M34.818,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.333-11.892,16.357-11.855,16.607,0C43.121,60.054,39.458,64.043,34.818,64.043z M64.531,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.366-11.869,16.19-11.874,16.607,0C72.834,60.054,69.171,64.043,64.531,64.043z"></path></svg></a>
              <a href="https://www.linkedin.com/in/miguelangel-abou-9333b0325" target="_blank" rel="noopener noreferrer" className="button transform transition duration-300 md:hover:scale-125"><svg className="icon" viewBox="0 0 124 124" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M102.4 70.7v28.5c0 .7-.6 1.3-1.3 1.3H86.4c-.7 0-1.3-.6-1.3-1.3V72.7c0-7-2.5-11.8-8.8-11.8-4.8 0-7.6 3.2-8.9 6.3-.5 1.1-.6 2.7-.6 4.2v27.8c0 .7-.6 1.3-1.3 1.3H50.9c-.7 0-1.3-.6-1.3-1.3 0-7.1.2-41.4 0-49.4 0-.7.6-1.3 1.3-1.3h14.7c.7 0 1.3.6 1.3 1.3v6.1c0 .1-.1.1-.1.2h.1v-.2c2.3-3.5 6.4-8.6 15.6-8.6 11.4 0 19.9 7.5 19.9 23.4zM24 100.6h14.7c.7 0 1.3-.6 1.3-1.3V49.8c0-.7-.6-1.3-1.3-1.3H24c-.7 0-1.3.6-1.3 1.3v49.5c.1.7.6 1.3 1.3 1.3z"></path><circle cx="30.9" cy="32.7" r="9.3"></circle></svg></a>
              <a href="mailto:miguelangelabou.work@gmail.com" target="_blank" rel="noopener noreferrer" className="button transform transition duration-300 md:hover:scale-125"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 48 48"><path fill="#4285F4" d="M3.27273 42.0088H10.9091V23.4633L0 15.2815V38.736C0 40.5442 1.46455 42.0088 3.27273 42.0088Z"></path><path fill="#34A853" d="M37.0909 42.0088H44.7273C46.5355 42.0088 48 40.5442 48 38.736V15.2815L37.0909 23.4633V42.0088Z"></path><path fill="#FBBC04" d="M37.0909 9.28155V23.4634L48 15.2815V10.9179C48 6.87336 43.3827 4.56336 40.1455 6.99064L37.0909 9.28155Z"></path><path fill="#EA4335" fillRule="evenodd" d="M10.9091 23.4633V9.28149L24 19.0997L37.0909 9.28149V23.4633L24 33.2815L10.9091 23.4633Z" clipRule="evenodd"></path><path fill="#C5221F" d="M0 10.9179V15.2815L10.9091 23.4634V9.28155L7.85455 6.99064C4.61727 4.56336 0 6.87336 0 10.9179Z"></path></svg></a>
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

          <div className="inline-flex items-center gap-2 mt-4">
            <a className="min-h-[40px] inline-flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 transition-colors" href="/Curriculum.pdf" target="_blank" download>
              <FileText className='text-white h-5 w-5' /> {t.aboutMe.downloadCV}
            </a>

            <button onClick={handleCopyEmail} className="relative min-h-[40px] inline-flex items-center justify-center gap-2 text-white bg-blue-400 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg">
               {copySuccess ? <><Check className='text-white h-5 w-5' /> Copied!</> : <><Copy className='text-white h-5 w-5' /> {t.aboutMe.copyEmail}</>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;