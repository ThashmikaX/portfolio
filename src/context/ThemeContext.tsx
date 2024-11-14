'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  const savedTheme = (localStorage.getItem('theme') as Theme) || null;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const initialTheme = savedTheme || systemTheme;

  setTheme(initialTheme);
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(initialTheme);
  setMounted(true);
}, []);


  const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  console.log(`Switching theme to: ${newTheme}`);
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(newTheme);
};



  // Only render the provider after mounting
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
