import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 md:p-4 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-coral-400 transition-all duration-300 hover:scale-110 shadow-lg group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 group-hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 md:w-6 md:h-6 text-navy-600 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;