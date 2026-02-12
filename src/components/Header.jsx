import React, { useState, useEffect, useRef } from 'react';
import { Code2, Menu, Sun, Moon, Languages, X } from 'lucide-react';

const Header = ({ t, theme, toggleTheme, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const langMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsLangMenuOpen(false);
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !mobileBtnRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#AboutMe", label: t.nav.AboutMe },
    { href: "#Experience", label: t.nav.Experience },
    { href: "#Projects", label: t.nav.Project },
    { href: "#Skills", label: t.nav.Skills },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 md:px-6`}>
        <div className={`rounded-2xl transition-all duration-300 ${
          isScrolled ? 'glass-panel shadow-lg px-6 py-3' : 'bg-transparent px-0 py-0 border-transparent'
        } flex items-center justify-between`}>
          
          {/* Logo */}
          <a href="#TOP" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600 rounded-lg text-white transform group-hover:rotate-12 transition-transform">
              <Code2 size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:block text-dynamic">
              Miguelangel<span className="text-blue-500">{t.header.logoSuffix}</span>
            </span>
          </a>

          {/* Desktop Nav Links (SOLO ENLACES - Oculto en móvil) */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-sm font-medium text-dynamic">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-blue-500 transition-colors cursor-pointer" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions (Visible en todos los dispositivos) */}
          <div className="flex items-center gap-3">
            
            {/* Separador (Solo visible en Desktop 'md:block' para separar links de iconos) */}
            <div className="hidden md:block h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2"></div>

            {/* Language Toggle - Ahora fuera del nav hidden */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-full transition-colors text-dynamic cursor-pointer"
              >
                <Languages size={18} />
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 glass-panel rounded-xl shadow-xl overflow-hidden py-1 animate-fade-in">
                  <button className="block w-full text-left px-4 py-2 text-dynamic cursor-pointer" onClick={() => { setLang('es'); setIsLangMenuOpen(false); }}><span className="fi fi-es mr-2"></span> Español</button>
                  <button className="block w-full text-left px-4 py-2 text-dynamic cursor-pointer" onClick={() => { setLang('en'); setIsLangMenuOpen(false); }}><span className="fi fi-us mr-2"></span> English</button>
                  <button className="block w-full text-left px-4 py-2 text-dynamic cursor-pointer" onClick={() => { setLang('pt'); setIsLangMenuOpen(false); }}><span className="fi fi-br mr-2"></span> Portugués</button>
                  <button className="block w-full text-left px-4 py-2 text-dynamic cursor-pointer" onClick={() => { setLang('zh'); setIsLangMenuOpen(false); }}><span className="fi fi-cn mr-2"></span> 中文</button>
                  <button className="block w-full text-left px-4 py-2 text-dynamic cursor-pointer" onClick={() => { setLang('ar'); setIsLangMenuOpen(false); }}><span className="fi fi-sa mr-2"></span> التواصل</button>
                </div>
              )}
            </div>

            {/* Theme Toggle - Ahora fuera del nav hidden */}
            <button 
              onClick={toggleTheme}
              className="p-2 cursor-pointer rounded-full transition-colors text-yellow-500 dark:text-blue-300"
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile Toggle Button */}
            <button 
              ref={mobileBtnRef}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="absolute top-full left-0 right-0 p-4 md:hidden"
        >
          <div className="glass-panel rounded-2xl p-4 shadow-2xl flex flex-col gap-4 animate-fade-in">
             {navLinks.map((link) => (
                <a 
                  key={link.label}
                  className="block px-4 py-3 rounded-xl text-dynamic font-medium transition-colors" 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;