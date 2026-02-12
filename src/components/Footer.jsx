import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    // Usamos bg-footer-dynamic que controla fondo y borde con variables
    <footer className="py-12 mt-auto bg-footer-dynamic backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-dynamic">
            {t.footer.copyright}
          </p>
          <p className="text-xs text-muted-dynamic mt-1 opacity-80">
            {t.footer.builtWith} <span className="text-red-500">♥</span> by Miguelangel.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/miguelangelabou" target="_blank" rel="noreferrer" className="text-muted-dynamic hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/miguelangelabou" target="_blank" rel="noreferrer" className="text-muted-dynamic hover:text-blue-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:miguelangelabou.work@gmail.com" className="text-muted-dynamic hover:text-red-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;