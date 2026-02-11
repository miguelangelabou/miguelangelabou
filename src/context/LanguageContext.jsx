import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../data/languages';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado inicial: intenta leer de localStorage, si no, busca el del navegador, o usa 'en'
  const [langKey, setLangKey] = useState(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) return savedLang;
    
    const browserLang = navigator.language.split('-')[0];
    return ['es', 'en', 'pt', 'zh', 'ar'].includes(browserLang) ? browserLang : 'en';
  });

  const [t, setT] = useState(translations[langKey]);

  useEffect(() => {
    setT(translations[langKey]);
    localStorage.setItem('language', langKey);
    
    // Manejo de dirección para árabe (RTL)
    if (langKey === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = langKey;
    }
  }, [langKey]);

  const changeLanguage = (key) => {
    if (translations[key]) {
      setLangKey(key);
    }
  };

  return (
    <LanguageContext.Provider value={{ t, langKey, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el idioma en cualquier componente
export const useLanguage = () => useContext(LanguageContext);