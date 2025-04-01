import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  // Initialize darkMode state based on whether the "theme" attribute is "dark-mode" on the <html> element.
  const [darkMode, setDarkMode] = useState(
    document.documentElement.getAttribute('theme') === 'dark-mode'
  );

  useEffect(() => {
    // Create a MutationObserver to watch for changes on the <html> element.
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.getAttribute('theme') === 'dark-mode');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['theme'] });
    
    return () => observer.disconnect();
  }, []);

  return darkMode;
};
