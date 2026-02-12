import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-zinc-800 mt-auto bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            {t.footer.copyright}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {t.footer.builtWith} <span className="text-red-500">♥</span> by Miguelangel.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/miguelangelabou" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/miguelangelabou" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:miguelangelabou.work@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;