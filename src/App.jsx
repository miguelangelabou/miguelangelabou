import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  
  // Consumimos el contexto en lugar de gestionar el estado localmente
  const { t, langKey, changeLanguage } = useLanguage();

  // Manejo del Loader inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  // Manejo del Tema (Dark/Light) - Inicialización
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme !== 'light' && savedTheme !== 'dark' 
      ? (prefersDark ? 'dark' : 'light') 
      : savedTheme;
      
    setTheme(initialTheme);
  }, []);

  // Aplicación de variables CSS según el tema
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--base-color', 'rgba(18, 18, 18, 1)');
      root.style.setProperty('--bg-base-header', 'rgba(18, 18, 18, 1)');
      root.style.setProperty('--text-color', '#e0e0e0');
      root.style.setProperty('--card-color', '#1e1e1e');
      root.style.setProperty('--bg-icon', '#ffffff');
    } else {
      root.style.setProperty('--base-color', '#ffffff');
      root.style.setProperty('--bg-base-header', 'rgba(255, 255, 255, 1)');
      root.style.setProperty('--text-color', '#001f3f');
      root.style.setProperty('--card-color', '#ebeced');
      root.style.setProperty('--icon-color', '#ffffff');
      root.style.setProperty('--bg-icon', '#3b3939');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (loading) return <Loader />;

  return (
    <div className={`font-roboto text-sm md:text-base flex flex-col items-center justify-center ${langKey === 'ar' ? 'rtl' : ''}`}>
      {/* Pasamos changeLanguage al Header para el selector de idiomas */}
      <Header t={t} theme={theme} toggleTheme={toggleTheme} setLang={changeLanguage} />
      
      <main className="container mx-auto w-[95%] md:w-[1024px]">
        <Hero t={t} theme={theme} />
        <Carousel />
        <Education t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <SoftSkills t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;