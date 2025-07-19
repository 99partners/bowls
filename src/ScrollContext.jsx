import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [showHeroLogo, setShowHeroLogo] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const threshold = 200;
    const handleScroll = () => {
      const y = window.scrollY;
      setShowHeroLogo(y < threshold);
      setScrollProgress(Math.min(1, Math.max(0, y / threshold)));
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ showHeroLogo, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext); 