import React, { useState, useEffect, useRef } from 'react'; // 1. Importamos useRef
import { Code2, Menu, Sun, Moon, Languages, X } from 'lucide-react';

const Header = ({ t, theme, toggleTheme, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // 2. Referencias para detectar clicks fuera
  const langMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileBtnRef = useRef(null); // Referencia para el botón de menú móvil

  // 3. Manejo del Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Cerramos los menús al hacer scroll
      setIsLangMenuOpen(false);
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Manejo de Clicks fuera de los componentes (Click Outside)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Lógica para el menú de idiomas
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }

      // Lógica para el menú móvil
      // Si el click NO es en el menú Y TAMPOCO en el botón que lo abre
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
  }, [isMobileMenuOpen]); // Añadimos isMobileMenuOpen como dependencia

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

          {/* Desktop Nav */}
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

            <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2"></div>

            <div className="flex items-center gap-3">
               {/* Language Toggle - AQUI AGREGAMOS LA REF (langMenuRef) */}
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

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 cursor-pointer rounded-full transition-colors text-yellow-500 dark:text-blue-300"
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </nav>

          {/* Mobile Toggle Button - AQUI AGREGAMOS LA REF (mobileBtnRef) */}
          <button 
            ref={mobileBtnRef}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - AQUI AGREGAMOS LA REF (mobileMenuRef) */}
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