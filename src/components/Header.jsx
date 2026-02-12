import React, { useState, useEffect, useRef } from 'react';
import { Code2, Menu, Sun, Moon, Languages, X } from 'lucide-react';

const Header = ({ t, theme, toggleTheme, setLang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const navLinks = [
    { href: "#AboutMe", label: t.nav.AboutMe },
    { href: "#Education", label: t.nav.Education },
    { href: "#Experience", label: t.nav.Experience },
    { href: "#Projects", label: t.nav.Project },
    { href: "#Skills", label: t.nav.Skills },
    { href: "#Contact", label: t.nav.Contact },
  ];

  useEffect(() => {
    const handleScroll = () => { if (isMobileMenuOpen) setIsMobileMenuOpen(false); };
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsLangMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="bg-base-header sticky top-0 z-[5] shadow w-full" id="TOP">
      <div className={`container mx-auto px-4 py-6 flex items-center relative justify-between`}>
        
        <a className={`text-text-color text-base md:text-lg lg:text-3xl font-bold animate-fade-in name items-center ${isMobileMenuOpen ? 'hidden' : 'flex'}`} href="#AboutMe">
          <Code2 className="inline-block text-blue-400 me-2 hidden sm:block" size={28} />
          {t.name}
        </a>

        <nav className="flex items-center gap-4">
          <ul className="hidden md:flex gap-4 md:text-[13px] lg:text-base">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="underline-animation text-black-500 hover:text-hover" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="text-text-color bg-transparent md:hidden rounded-full px-4 py-2 z-[6]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button 
            className={`p-1 text-text-color md:hover:bg-[rgba(219,219,219,0.25)] rounded-lg z-[6] ${isMobileMenuOpen ? 'hidden' : 'block'}`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="relative z-[7]">
            <button 
              className={`text-text-color md:hover:bg-[rgba(219,219,219,0.25)] rounded-lg p-1 z-[6] ${isMobileMenuOpen ? 'hidden' : 'block'}`}
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <Languages size={20} />              
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute end-0 mt-2 w-48 bg-base border border-gray-200 rounded-lg shadow-lg">
                {[
                  { code: 'es', label: 'Español', flag: 'fi-es' },
                  { code: 'en', label: 'English', flag: 'fi-us' },
                  { code: 'pt', label: 'Portugués', flag: 'fi-br' },
                  { code: 'zh', label: '中文', flag: 'fi-cn' },
                  { code: 'ar', label: 'العربية', flag: 'fi-sa' }
                ].map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => { setLang(lang.code); setIsLangMenuOpen(false); }}
                    className="flex items-center w-full px-4 py-2 text-text-color hover:text-[#3b82f6]"
                  >
                    <span className={`fi ${lang.flag} me-2`}></span> 
                    <span className="flex-1 text-start">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute bg-base-header w-full top-full start-0 z-[5] shadow-lg mobile-menu-animate">
          <ul className="space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="block text-black-500 hover:text-hover" href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;