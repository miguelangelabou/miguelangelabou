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
  const { t, langKey, changeLanguage } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme !== 'light' && savedTheme !== 'dark' ? (prefersDark ? 'dark' : 'light') : savedTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  if (loading) return <Loader />;

  return (
    <div className={`min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300 ${langKey === 'ar' ? 'rtl' : ''}`}>
      <Header t={t} theme={theme} toggleTheme={toggleTheme} setLang={changeLanguage} />
      
      <main className="flex-grow">
        <Hero t={t} />
        {/* Carrusel rediseñado como Infinite Marquee */}
        <Carousel />
        
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Education t={t} />
        <SoftSkills t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;