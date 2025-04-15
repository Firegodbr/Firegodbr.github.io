import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'; // Optional: use your own icons

type Theme = 'light' | 'dark' | 'auto';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('auto');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const initial = stored || 'auto';
    setTheme(initial);

    applyTheme(initial === 'auto' ? preferred : initial);
  }, []);

  const applyTheme = (themeValue: Theme) => {
    const html = document.documentElement;
    if (themeValue === 'auto') {
      const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      html.classList.toggle('dark', system === 'dark');
    } else {
      html.classList.toggle('dark', themeValue === 'dark');
    }
  };

  const handleChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const iconStyle = (btnTheme: Theme) =>
    `p-2 rounded-md border ${
      theme === btnTheme
        ? 'bg-gray-200 dark:bg-gray-700'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleChange('light')}
        className={iconStyle('light')}
        title="Light"
      >
        <SunIcon className="w-5 h-5 text-yellow-500" />
      </button>
      <button
        onClick={() => handleChange('dark')}
        className={iconStyle('dark')}
        title="Dark"
      >
        <MoonIcon className="w-5 h-5 text-blue-400" />
      </button>
      <button
        onClick={() => handleChange('auto')}
        className={iconStyle('auto')}
        title="System"
      >
        <ComputerDesktopIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default ThemeToggle;
