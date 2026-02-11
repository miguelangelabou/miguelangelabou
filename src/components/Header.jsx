import React, { useState } from 'react';

const Header = ({ t, theme, toggleTheme, setLang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navLinks = [
    { href: "#AboutMe", label: t.nav.AboutMe },
    { href: "#Education", label: t.nav.Education },
    { href: "#Experience", label: t.nav.Experience },
    { href: "#Projects", label: t.nav.Project },
    { href: "#Skills", label: t.nav.Skills },
    { href: "#Contact", label: t.nav.Contact },
  ];

  return (
    <>
      <header className="bg-base-header sticky top-0 z-[5] shadow w-full" id="TOP">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center relative">
          <a className={`text-text-color text-base md:text-lg lg:text-3xl font-bold text-center animate-fade-in name ${isMobileMenuOpen ? 'hidden' : 'block'}`} href="#AboutMe">
            <i className="fas fa-code text-blue-400 mr-2"></i>
            {t.name}
          </a>

          <nav className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-4 md:text-[13px] lg:text-base">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a className="underline-animation text-black-500 hover:text-hover" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <button 
              className="text-text-color text-base bg-transparent md:hidden rounded-full px-4 py-2 z-[6]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Theme Toggle */}
            <button 
              className="px-1 py-1 min-w-[25px] text-base text-text-color md:hover:text-blue-500 md:hover:bg-[rgba(219,219,219,0.25)] rounded-lg z-[6]"
              onClick={toggleTheme}
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            {/* Language Toggle */}
            <div className="relative z-[7]">
              <button 
                className="text-text-color md:hover:text-blue-500 md:hover:bg-[rgba(219,219,219,0.25)] rounded-lg p-1"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages h-[1.2rem] w-[1.2rem]"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>              
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-base border border-gray-200 rounded-lg shadow-lg" onMouseLeave={() => setIsLangMenuOpen(false)}>
                  {[
                    { code: 'es', label: 'Español', flag: 'fi-es' },
                    { code: 'en', label: 'English', flag: 'fi-us' },
                    { code: 'pt', label: 'Portugués', flag: 'fi-br' },
                    { code: 'zh', label: '中文', flag: 'fi-cn' },
                    { code: 'ar', label: 'التواصل', flag: 'fi-sa' }
                  ].map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => { setLang(lang.code); setIsLangMenuOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-text-color hover:text-[#3b82f6]"
                    >
                      <span className={`fi ${lang.flag} mr-2`}></span> {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden overflow-hidden absolute bg-base-header w-full fixed top-14 z-[5] shadow-lg mobile-menu-animate">
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
    </>
  );
};

export default Header;